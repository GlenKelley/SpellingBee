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
// spelling feedback) should be keyed by the word itself, e.g. 'antler': 'audio/antler.mp3'

export const AUDIO_LIBRARY = {
   'Please spell,':           'audio/please-spell.mp3',

   'Brilliant! Well done!':   'audio/brilliant-well-done.mp3',
   'Amazing! You nailed it!': 'audio/amazing-you-nailed-it.mp3',
   'Fantastic! Keep it up!':  'audio/fantastic-keep-it-up.mp3',
   'Superb! You got it!':     'audio/superb-you-got-it.mp3',
   'Excellent work!':         'audio/excellent-work.mp3',
   'Outstanding! Well spelled!': 'audio/outstanding-well-spelled.mp3',
   'Perfect! Great job!':     'audio/perfect-great-job.mp3',
   'Wonderful! You are a star!': 'audio/wonderful-you-are-a-star.mp3',
   'Impressive! Spot on!':    'audio/impressive-spot-on.mp3',
   'Magnificent! Keep going!':'audio/magnificent-keep-going.mp3',

  'So close!': 'audio/so-close.mp3',
  'Almost': 'audio/almost.mp3',
  'Good try': 'audio/good-try.mp3',
  'Good effort': 'audio/good-effort.mp3',
  'Bad luck': 'audio/bad-luck.mp3',
  'Sorry': 'audio/sorry.mp3',
  'You will get it next time': 'audio/you-will-get-it-next-time.mp3',

  a: 'audio/a.mp3',
  b: 'audio/b.mp3',
  c: 'audio/c.mp3',
  d: 'audio/d.mp3',
  e: 'audio/e.mp3',
  f: 'audio/f.mp3',
  g: 'audio/g.mp3',
  h: 'audio/h.mp3',
  i: 'audio/i.mp3',
  j: 'audio/j.mp3',
  k: 'audio/k.mp3',
  l: 'audio/l.mp3',
  m: 'audio/m.mp3',
  n: 'audio/n.mp3',
  o: 'audio/o.mp3',
  p: 'audio/p.mp3',
  q: 'audio/q.mp3',
  r: 'audio/r.mp3',
  s: 'audio/s.mp3',
  t: 'audio/t.mp3',
  u: 'audio/u.mp3',
  v: 'audio/v.mp3',
  w: 'audio/w.mp3',
  x: 'audio/x.mp3',
  y: 'audio/y.mp3',
  z: 'audio/z.mp3',

  antler: 'audio/antler.mp3',
  bang: 'audio/bang.mp3',
  barn: 'audio/barn.mp3',
  basket: 'audio/basket.mp3',
  black: 'audio/black.mp3',
  broad: 'audio/broad.mp3',
  cabin: 'audio/cabin.mp3',
  chess: 'audio/chess.mp3',
  chin: 'audio/chin.mp3',
  dawn: 'audio/dawn.mp3',
  fair: 'audio/fair.mp3',
  fate: 'audio/fate.mp3',
  fleet: 'audio/fleet.mp3',
  front: 'audio/front.mp3',
  goat: 'audio/goat.mp3',
  holy: 'audio/holy.mp3',
  left: 'audio/left.mp3',
  letter: 'audio/letter.mp3',
  mail: 'audio/mail.mp3',
  marble: 'audio/marble.mp3',
  monster: 'audio/monster.mp3',
  mood: 'audio/mood.mp3',
  pain: 'audio/pain.mp3',
  path: 'audio/path.mp3',
  rare: 'audio/rare.mp3',
  rash: 'audio/rash.mp3',
  real: 'audio/real.mp3',
  reap: 'audio/reap.mp3',
  royal: 'audio/royal.mp3',
  sale: 'audio/sale.mp3',
  scar: 'audio/scar.mp3',
  shake: 'audio/shake.mp3',
  sheep: 'audio/sheep.mp3',
  shine: 'audio/shine.mp3',
  shoe: 'audio/shoe.mp3',
  since: 'audio/since.mp3',
  skim: 'audio/skim.mp3',
  smile: 'audio/smile.mp3',
  snore: 'audio/snore.mp3',
  snow: 'audio/snow.mp3',
  spider: 'audio/spider.mp3',
  spine: 'audio/spine.mp3',
  spoon: 'audio/spoon.mp3',
  stamp: 'audio/stamp.mp3',
  start: 'audio/start.mp3',
  steel: 'audio/steel.mp3',
  swag: 'audio/swag.mp3',
  tact: 'audio/tact.mp3',
  tail: 'audio/tail.mp3',
  tide: 'audio/tide.mp3',
  total: 'audio/total.mp3',
  tower: 'audio/tower.mp3',
  track: 'audio/track.mp3',
  trust: 'audio/trust.mp3',
  vase: 'audio/vase.mp3',
  vine: 'audio/vine.mp3',
  wait: 'audio/wait.mp3',
  weak: 'audio/weak.mp3',
  yelp: 'audio/yelp.mp3',
  young: 'audio/young.mp3',
  zest: 'audio/zest.mp3',

}
