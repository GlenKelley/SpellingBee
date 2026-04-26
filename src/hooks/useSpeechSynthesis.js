import { useCallback, useEffect, useRef } from 'react'
import { AUDIO_LIBRARY } from '../data/audioLibrary'

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
  const voiceRef        = useRef(null)
  const currentAudioRef = useRef(null)

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
    // Stop any currently playing audio or TTS
    window.speechSynthesis.cancel()
    if (currentAudioRef.current) {
      currentAudioRef.current.pause()
      currentAudioRef.current = null
    }

    // Play pre-recorded audio if available
    const audioSrc = AUDIO_LIBRARY[text]
    if (audioSrc) {
      return new Promise((resolve) => {
        const audio = new Audio(audioSrc)
        currentAudioRef.current = audio
        const done = () => { currentAudioRef.current = null; resolve() }
        audio.onended = done
        audio.onerror = done
        audio.play().catch(done)
      })
    }

    // Fall back to TTS
    const utterance = new SpeechSynthesisUtterance(text)
    if (voiceRef.current) utterance.voice = voiceRef.current
    utterance.lang   = voiceRef.current?.lang ?? 'en-AU'
    utterance.rate   = options.rate   ?? 0.85
    utterance.pitch  = options.pitch  ?? 1.0
    utterance.volume = options.volume ?? 1

    return new Promise((resolve) => {
      utterance.onend   = resolve
      utterance.onerror = resolve
      window.speechSynthesis.speak(utterance)
    })
  }, [])

  const cancel = useCallback(() => {
    window.speechSynthesis.cancel()
    if (currentAudioRef.current) {
      currentAudioRef.current.pause()
      currentAudioRef.current = null
    }
  }, [])

  return { speak, cancel }
}
