import { useCallback, useEffect, useRef } from 'react'

// Priority-ordered female Australian voices, then female English fallbacks.
// Names are matched as substrings so "Olivia (Enhanced)" still matches "Olivia".
const PREFERRED_VOICES = [
  // Australian female – macOS/iOS (best quality first)
  'Olivia',             // macOS Ventura+ neural
  'Matilda',            // macOS enhanced
  'Karen',              // macOS standard
  'Catherine',          // some iOS builds
  'Google Australian English', // Chrome on desktop
  // English female fallbacks
  'Samantha',           // macOS US female
  'Victoria',
  'Moira',              // macOS Irish female (clear, pleasant)
  'Fiona',
  'Tessa',
]

function pickVoice() {
  const voices = window.speechSynthesis.getVoices()
  if (!voices.length) return null

  for (const name of PREFERRED_VOICES) {
    const match = voices.find(v => v.name.includes(name))
    if (match) return match
  }

  // Any Australian English voice
  const auVoice = voices.find(v => v.lang.startsWith('en-AU'))
  if (auVoice) return auVoice

  // Any English voice
  return voices.find(v => v.lang.startsWith('en')) ?? null
}

export function useSpeechSynthesis() {
  // Use a ref so speak() is stable and never triggers effect re-runs
  const voiceRef = useRef(null)

  useEffect(() => {
    function load() {
      const v = pickVoice()
      if (v) voiceRef.current = v
    }
    load()
    window.speechSynthesis.addEventListener('voiceschanged', load)
    return () => window.speechSynthesis.removeEventListener('voiceschanged', load)
  }, [])

  const speak = useCallback((text, options = {}) => {
    window.speechSynthesis.cancel()
    const utterance = new SpeechSynthesisUtterance(text)
    if (voiceRef.current) utterance.voice = voiceRef.current
    utterance.lang   = voiceRef.current?.lang ?? 'en-AU'
    utterance.rate   = options.rate   ?? 0.85
    utterance.pitch  = options.pitch  ?? 1.0   // let the voice speak naturally
    utterance.volume = options.volume ?? 1

    return new Promise((resolve) => {
      utterance.onend   = resolve
      utterance.onerror = resolve
      window.speechSynthesis.speak(utterance)
    })
  }, []) // stable – reads voice from ref at call time

  const cancel = useCallback(() => {
    window.speechSynthesis.cancel()
  }, [])

  return { speak, cancel }
}
