// Audio library — maps exact text prompts to pre-recorded audio files.
// Files should be placed in public/audio/ so they are served at /audio/<filename>.
//
// When speak(text) is called, the text is looked up here first.
// If a match is found the audio file plays; otherwise TTS is used as a fallback.
//
// Known prompts used by the app:
//
//   Instruction
//     'Please spell,'
//
//   Correct affirmations (one is chosen at random per correct answer)
//     'Brilliant! Well done!'
//     'Amazing! You nailed it!'
//     'Fantastic! Keep it up!'
//     'Superb! You got it!'
//     'Excellent work!'
//     'Outstanding! Well spelled!'
//     'Perfect! Great job!'
//     'Wonderful! You are a star!'
//     'Impressive! Spot on!'
//     'Magnificent! Keep going!'
//
//   Incorrect feedback (note: "Good try! The word was <word>:" is dynamic
//   and cannot be matched here — record individual words in WORD_AUDIO instead)
//
// Individual word pronunciations (used for both "hear again" and letter-by-letter
// spelling feedback) should be keyed by the word itself, e.g. 'antler': '/audio/antler.mp3'

export const AUDIO_LIBRARY = {
  // 'Please spell,':           '/audio/please-spell.mp3',

  // 'Brilliant! Well done!':   '/audio/brilliant-well-done.mp3',
  // 'Amazing! You nailed it!': '/audio/amazing-you-nailed-it.mp3',
  // 'Fantastic! Keep it up!':  '/audio/fantastic-keep-it-up.mp3',
  // 'Superb! You got it!':     '/audio/superb-you-got-it.mp3',
  // 'Excellent work!':         '/audio/excellent-work.mp3',
  // 'Outstanding! Well spelled!': '/audio/outstanding-well-spelled.mp3',
  // 'Perfect! Great job!':     '/audio/perfect-great-job.mp3',
  // 'Wonderful! You are a star!': '/audio/wonderful-you-are-a-star.mp3',
  // 'Impressive! Spot on!':    '/audio/impressive-spot-on.mp3',
  // 'Magnificent! Keep going!':'/audio/magnificent-keep-going.mp3',
}
