import { useState, useEffect, useRef, useCallback } from 'react'

// Maps spoken words/phonetic letter names → the actual letter
const PHONETIC = {
  a:'a', b:'b', c:'c', d:'d', e:'e', f:'f', g:'g', h:'h',
  i:'i', j:'j', k:'k', l:'l', m:'m', n:'n', o:'o', p:'p',
  q:'q', r:'r', s:'s', t:'t', u:'u', v:'v', w:'w', x:'x',
  y:'y', z:'z',
  ay:'a', bee:'b', see:'c', sea:'c', dee:'d', ee:'e',
  ef:'f', eff:'f', gee:'g', aitch:'h', haitch:'h', eye:'i',
  jay:'j', kay:'k', el:'l', em:'m', en:'n', oh:'o', owe:'o',
  pee:'p', cue:'q', queue:'q', ar:'r', are:'r', ess:'s',
  tee:'t', tea:'t', you:'u', yew:'u', vee:'v',
  ex:'x', why:'y', wye:'y', zed:'z', zee:'z',
}

export function transcriptToLetters(transcript) {
  if (!transcript) return ''
  let clean = transcript.toLowerCase().replace(/[^a-z\s]/g, '').trim()
  // Handle the two-word phonetic name for W
  clean = clean.replace(/\bdouble\s+you\b/g, 'w').replace(/\bdouble\s+u\b/g, 'w')
  if (!clean) return ''

  const result = []
  for (const word of clean.split(/\s+/)) {
    if (!word) continue
    if (PHONETIC[word]) {
      result.push(PHONETIC[word])
    }
    // words not in the phonetic map are ignored — user must spell letter by letter
  }
  return result.join('')
}

export function useSpeechRecognition() {
  const [isListening, setIsListening]   = useState(false)
  const [letters, setLetters]           = useState('')
  const [rawTranscript, setRawTranscript] = useState('')
  const [isSupported, setIsSupported]   = useState(false)

  const recognitionRef  = useRef(null)
  const isActiveRef     = useRef(false)  // true while we want to keep listening

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    if (!SpeechRecognition) return
    setIsSupported(true)

    const r = new SpeechRecognition()
    r.continuous      = true
    r.interimResults  = true
    r.lang            = 'en-AU'
    r.maxAlternatives = 1

    r.onresult = (event) => {
      let finalText = ''
      let interimText = ''
      for (let i = 0; i < event.results.length; i++) {
        if (event.results[i].isFinal) {
          finalText += event.results[i][0].transcript + ' '
        } else {
          interimText += event.results[i][0].transcript
        }
      }
      const combined = (finalText + interimText).trim()
      setRawTranscript(combined)
      setLetters(transcriptToLetters(combined))
    }

    r.onerror = (event) => {
      if (event.error === 'no-speech' || event.error === 'aborted') return
      // not-allowed, audio-capture, network, etc. — stop listening
      console.error('Speech recognition error:', event.error)
      isActiveRef.current = false
      shouldRestart.current = false
      setIsListening(false)
    }

    r.onend = () => {
      shouldRestart.current = false
      if (isActiveRef.current) {
        // iOS Safari ignores continuous:true and stops after each utterance;
        // restart unconditionally so spelling works across all mobile browsers.
        setTimeout(() => {
          try { r.start() } catch (_) { isActiveRef.current = false; setIsListening(false) }
        }, 100)
        return
      }
      setIsListening(false)
    }

    recognitionRef.current = r
    return () => { r.abort() }
  }, [])

  const start = useCallback(() => {
    if (!recognitionRef.current) return
    setLetters('')
    setRawTranscript('')
    isActiveRef.current = true
    try {
      recognitionRef.current.start()
      setIsListening(true)
    } catch (_) {}
  }, [])

  const stop = useCallback(() => {
    isActiveRef.current = false
    if (recognitionRef.current) recognitionRef.current.stop()
  }, [])

  // abort() drops the session immediately (no final onresult), then restarts clean
  const reset = useCallback(() => {
    isActiveRef.current = false
    if (recognitionRef.current) recognitionRef.current.abort()
    setLetters('')
    setTimeout(() => {
      if (!recognitionRef.current) return
      setLetters('')
      setRawTranscript('')
      isActiveRef.current = true
      try {
        recognitionRef.current.start()
        setIsListening(true)
      } catch (_) {}
    }, 150)
  }, [])

  return { isListening, letters, rawTranscript, isSupported, start, stop, reset }
}
