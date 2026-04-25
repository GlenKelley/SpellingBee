import { useCallback } from 'react'

export function useSpeechSynthesis() {
  const speak = useCallback((text, options = {}) => {
    window.speechSynthesis.cancel()
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.rate   = options.rate   ?? 0.85
    utterance.pitch  = options.pitch  ?? 1.1
    utterance.volume = options.volume ?? 1
    utterance.lang   = 'en-AU'

    return new Promise((resolve) => {
      utterance.onend   = resolve
      utterance.onerror = resolve
      window.speechSynthesis.speak(utterance)
    })
  }, [])

  const cancel = useCallback(() => {
    window.speechSynthesis.cancel()
  }, [])

  return { speak, cancel }
}
