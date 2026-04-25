import { useState, useEffect, useCallback } from 'react'
import { useSpeechSynthesis } from './hooks/useSpeechSynthesis'
import { useSpeechRecognition } from './hooks/useSpeechRecognition'
import { WORD_LISTS, LEVEL_INFO, WORDS_PER_GAME } from './data/words'
import './App.css'

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// ── Stats helpers ──
function loadStats() {
  try { return JSON.parse(localStorage.getItem('spellingbee_stats') || '{}') }
  catch { return {} }
}

function recordResult(name, word, correct) {
  if (!name) return
  const stats = loadStats()
  if (!stats[name]) stats[name] = {}
  if (!stats[name][word]) stats[name][word] = { correct: 0, incorrect: 0 }
  stats[name][word][correct ? 'correct' : 'incorrect']++
  localStorage.setItem('spellingbee_stats', JSON.stringify(stats))
}

function getUserStats(name) {
  return name ? (loadStats()[name] || {}) : {}
}

function LetterBoxes({ word, spelt, revealed, hideEmpty }) {
  const speltChars = spelt ? spelt.toUpperCase().split('') : []
  const count = hideEmpty ? speltChars.length : word.length
  return (
    <div className="letter-boxes">
      {Array.from({ length: count }, (_, i) => {
        let cls = 'lbox'
        let display = ''
        if (revealed) {
          cls += ' reveal'
          display = word[i]?.toUpperCase() ?? ''
        } else if (speltChars[i]) {
          cls += ' filled'
          display = speltChars[i]
        }
        return <div key={i} className={cls}>{display}</div>
      })}
    </div>
  )
}

function Stars({ score, total }) {
  const lit = Math.round((score / total) * 5)
  return (
    <div className="stars">
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < lit ? 'star lit' : 'star'}>★</span>
      ))}
    </div>
  )
}

// phase: 'idle' | 'speaking' | 'ready' | 'listening' | 'result'
export default function App() {
  const [screen, setScreen]         = useState('welcome')
  const [level, setLevel]           = useState('easy')
  const [gameWords, setGameWords]   = useState([])
  const [wordIndex, setWordIndex]   = useState(0)
  const [phase, setPhase]           = useState('idle')
  const [score, setScore]           = useState(0)
  const [lastResult, setLastResult] = useState(null)   // 'correct' | 'incorrect'
  const [lastSpelt, setLastSpelt]   = useState('')
  const [userName, setUserName]     = useState(() => localStorage.getItem('spellingbee_name') || '')
  const [gameResults, setGameResults] = useState([])

  const { speak, cancel: cancelSpeech } = useSpeechSynthesis()
  const { isListening, letters, isSupported, start: startListening, stop: stopListening } = useSpeechRecognition()

  const currentWord = gameWords[wordIndex] ?? ''

  // Announce the word when a new word becomes active
  const announceWord = useCallback(async (word) => {
    setPhase('speaking')
    await speak(`Please spell,`, { rate: 0.82 })
    await new Promise(r => setTimeout(r, 500))
    await speak(word, { rate: 0.3 })
    setPhase('ready')
  }, [speak])

  useEffect(() => {
    if (screen === 'game' && phase === 'idle' && currentWord) {
      const t = setTimeout(() => announceWord(currentWord), 700)
      return () => clearTimeout(t)
    }
  }, [screen, phase, currentWord, announceWord])

  // ── Keyboard shortcut: Enter ──
  useEffect(() => {
    function onKeyDown(e) {
      if (e.key !== 'Enter') return
      if (screen === 'welcome') { handleStartGame(); return }
      if (screen === 'complete') { setScreen('welcome'); return }
      if (screen === 'game') {
        if (phase === 'ready' && isSupported) { handleStartSpelling(); return }
        if (phase === 'listening') { handleDoneSpelling(); return }
        if (phase === 'result') { handleNextWord(); return }
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  })

  // ── Handlers ──

  function handleNameChange(e) {
    const name = e.target.value
    setUserName(name)
    localStorage.setItem('spellingbee_name', name)
  }

  function handleStartGame() {
    if (!userName.trim()) return
    const words = shuffle(WORD_LISTS[level]).slice(0, WORDS_PER_GAME)
    setGameWords(words)
    setWordIndex(0)
    setScore(0)
    setPhase('idle')
    setLastResult(null)
    setLastSpelt('')
    setGameResults([])
    setScreen('game')
  }

  async function handleHearAgain() {
    await speak(currentWord, { rate: 0.3 })
  }

  function handleStartSpelling() {
    setPhase('listening')
    startListening()
  }

  async function handleDoneSpelling() {
    stopListening()
    const spelt  = letters.toLowerCase().trim()
    const target = currentWord.toLowerCase()
    const correct = spelt === target
    setLastSpelt(spelt)
    setLastResult(correct ? 'correct' : 'incorrect')
    if (correct) setScore(s => s + 1)
    recordResult(userName, target, correct)
    setGameResults(r => [...r, { word: target, correct }])
    setPhase('result')
    if (correct) {
      speak('Brilliant! Well done!', { rate: 0.88 })
    } else {
      await speak(`Good try! The word was ${target}:`, { rate: 0.88 })
      await new Promise(r => setTimeout(r, 250))
      for (const letter of target) {
        await speak(letter, { rate: 0.5 })
      }
      await new Promise(r => setTimeout(r, 250))
      await speak(target, { rate: 0.88 })
    }
  }

  function handleNextWord() {
    cancelSpeech()
    if (wordIndex + 1 >= gameWords.length) {
      setScreen('complete')
    } else {
      setWordIndex(i => i + 1)
      setPhase('idle')
      setLastResult(null)
      setLastSpelt('')
    }
  }

  // ── Screens ──

  if (screen === 'welcome') {
    return (
      <div className="app">
        <div className="card welcome-card">
          <div className="bee">🐝</div>
          <h1>Spelling Bee</h1>
          <p className="tagline">Listen, then spell the word!</p>

          <div className="name-row">
            <label className="name-label">What's your name?</label>
            <input
              className="name-input"
              type="text"
              placeholder="Enter your name"
              value={userName}
              maxLength={30}
              onChange={handleNameChange}
            />
          </div>

          <p className="level-label">Choose your level:</p>
          <div className="level-buttons">
            {['easy', 'medium', 'hard'].map(l => (
              <button
                key={l}
                className={`level-btn ${level === l ? 'active' : ''}`}
                onClick={() => setLevel(l)}
              >
                {'★'.repeat(LEVEL_INFO[l].stars)} {LEVEL_INFO[l].label}
              </button>
            ))}
          </div>

          {!isSupported && (
            <div className="warning">
              ⚠️ Speech recognition is not supported in this browser.
              Please use Chrome or Edge for the best experience.
            </div>
          )}

          <button className="btn-primary" onClick={handleStartGame} disabled={!userName.trim()}>
            Start Game 🚀
          </button>
        </div>
      </div>
    )
  }

  if (screen === 'complete') {
    const pct = Math.round((score / gameWords.length) * 100)
    const message =
      pct === 100 ? 'Perfect score! Amazing! 🎉' :
      pct >= 80   ? 'Fantastic work! 🌟'          :
      pct >= 60   ? 'Good job! Keep practising! 👍' :
                    'Keep practising — you will get there! 💪'
    const userStats = getUserStats(userName)
    return (
      <div className="app">
        <div className="card complete-card">
          <div className="bee">🏆</div>
          <h2>Game Complete!</h2>
          <div className="final-score">
            <span className="score-big">{score}</span>
            <span className="score-denom"> / {gameWords.length}</span>
          </div>
          <p className="pct">{pct}%</p>
          <Stars score={score} total={gameWords.length} />
          <p className="end-message">{message}</p>

          {gameResults.length > 0 && (
            <div className="word-stats">
              <p className="stats-heading">{userName ? `${userName}'s results` : 'Results'}</p>
              {gameResults.map(({ word, correct }) => {
                const ws = userStats[word] || { correct: 0, incorrect: 0 }
                const total = ws.correct + ws.incorrect
                return (
                  <div key={word} className="word-stats-row">
                    <span className="w-name">{word.toUpperCase()}</span>
                    <span className={correct ? 'w-tick' : 'w-cross'}>{correct ? '✓' : '✗'}</span>
                    <span className="w-history">
                      {total > 1 ? `${ws.correct}/${total} all time` : ''}
                    </span>
                  </div>
                )
              })}
            </div>
          )}

          <button className="btn-primary" onClick={() => setScreen('welcome')}>
            Play Again 🔄
          </button>
        </div>
      </div>
    )
  }

  // ── Game screen ──
  return (
    <div className="app">
      <div className="game-header">
        <span className="progress-text">Word {wordIndex + 1} of {gameWords.length}</span>
        <span className="score-text">Score: {score} ⭐</span>
      </div>

      <div className="card game-card">
        {phase === 'idle' && (
          <div className="phase">
            <div className="phase-icon wobble">🐝</div>
            <p className="phase-message">Get ready…</p>
          </div>
        )}

        {phase === 'speaking' && (
          <div className="phase">
            <div className="phase-icon pulse">🔊</div>
            <p className="phase-message">Listen carefully!</p>
          </div>
        )}

        {phase === 'ready' && (
          <div className="phase">
            <div className="phase-icon">🐝</div>
            <p className="phase-message">Now spell the word!</p>
            <div className="btn-row">
              <button className="btn-secondary" onClick={handleHearAgain}>
                🔊 Hear Again
              </button>
              <button className="btn-spell" onClick={handleStartSpelling} disabled={!isSupported}>
                🎤 Start Spelling
              </button>
            </div>
          </div>
        )}

        {phase === 'listening' && (
          <div className="phase">
            <div className="recording-badge">
              <span className="mic">🎤</span>
              <span>Listening…</span>
            </div>
            <p className="phase-message">Say each letter clearly</p>

            <LetterBoxes word={currentWord} spelt={letters} revealed={false} hideEmpty />

            {letters && (
              <p className="heard-label">I heard: <strong>{letters.toUpperCase()}</strong></p>
            )}

            <button className="btn-done" onClick={handleDoneSpelling}>
              ✅ Done Spelling
            </button>
          </div>
        )}

        {phase === 'result' && (
          <div className="phase">
            {lastResult === 'correct' ? (
              <>
                <div className="result-icon">🌟</div>
                <p className="result-title correct">Brilliant!</p>
                <LetterBoxes word={currentWord} spelt={currentWord} revealed />
              </>
            ) : (
              <>
                <div className="result-icon">💪</div>
                <p className="result-title incorrect">Good try!</p>
                <p className="attempt-label">You spelled:</p>
                <p className="attempt-word">
                  {lastSpelt ? lastSpelt.toUpperCase() : '(nothing heard)'}
                </p>
                <p className="correct-label">The word was:</p>
                <LetterBoxes word={currentWord} spelt={currentWord} revealed />
              </>
            )}

            <button className="btn-next" onClick={handleNextWord}>
              {wordIndex + 1 >= gameWords.length ? '🏆 See Results' : '➡️ Next Word'}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
