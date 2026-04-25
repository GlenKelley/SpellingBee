import { useState, useEffect, useCallback } from 'react'
import { useSpeechSynthesis } from './hooks/useSpeechSynthesis'
import { useSpeechRecognition } from './hooks/useSpeechRecognition'
import { WORD_LISTS, LEVEL_INFO, SENTENCES } from './data/words'
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
// wordStat shape: { correct: number, incorrect: number, lastResult: 'correct'|'incorrect' }
// userStats shape: { [word]: wordStat }

function loadStats() {
  try { return JSON.parse(localStorage.getItem('spellingbee_stats') || '{}') }
  catch { return {} }
}

function recordResult(name, word, correct) {
  if (!name) return
  const stats = loadStats()
  if (!stats[name]) stats[name] = {}
  if (!stats[name][word]) stats[name][word] = { correct: 0, incorrect: 0, lastResult: null }
  stats[name][word][correct ? 'correct' : 'incorrect']++
  stats[name][word].lastResult = correct ? 'correct' : 'incorrect'
  localStorage.setItem('spellingbee_stats', JSON.stringify(stats))
}

function getUserStats(name) {
  return name ? (loadStats()[name] || {}) : {}
}

// Returns only words where lastResult === 'incorrect', shuffled
function buildRevisionQueue(level, userStats) {
  return shuffle(WORD_LISTS[level].filter(w => userStats[w]?.lastResult === 'incorrect'))
}

// Returns words ordered: unanswered → last incorrect → last correct (each tier shuffled)
function buildWordQueue(level, userStats) {
  const words = WORD_LISTS[level]
  const notAnswered = shuffle(words.filter(w => !userStats[w]))
  const incorrect   = shuffle(words.filter(w => userStats[w]?.lastResult === 'incorrect'))
  const correct     = shuffle(words.filter(w => userStats[w]?.lastResult === 'correct'))
  return [...notAnswered, ...incorrect, ...correct]
}

// Counts by lastResult for the header display
function computeLevelStats(level, userStats) {
  const words = WORD_LISTS[level]
  let correct = 0, incorrect = 0
  for (const w of words) {
    if (userStats[w]?.lastResult === 'correct') correct++
    else if (userStats[w]?.lastResult === 'incorrect') incorrect++
  }
  return { correct, incorrect, notAnswered: words.length - correct - incorrect }
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
  const [screen, setScreen]           = useState('welcome')
  const [level, setLevel]             = useState('easy')
  const [mode, setMode]               = useState('normal')  // 'normal' | 'revision'
  const [wordQueue, setWordQueue]     = useState([])
  const [phase, setPhase]             = useState('idle')
  const [score, setScore]             = useState(0)
  const [lastResult, setLastResult]   = useState(null)   // 'correct' | 'incorrect'
  const [lastSpelt, setLastSpelt]     = useState('')
  const [userName, setUserName]       = useState(() => localStorage.getItem('spellingbee_name') || '')
  const [userStats, setUserStats]     = useState(() => getUserStats(localStorage.getItem('spellingbee_name') || ''))
  const [gameResults, setGameResults] = useState([])

  const { speak, cancel: cancelSpeech } = useSpeechSynthesis()
  const { letters, isSupported, start: startListening, stop: stopListening, reset: resetListening } = useSpeechRecognition()

  const currentWord = wordQueue[0] ?? ''

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
        if (phase === 'listening' && letters) { handleDoneSpelling(); return }
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
    setUserStats(getUserStats(name))
    localStorage.setItem('spellingbee_name', name)
  }

  function startGame(queue, gameMode) {
    setWordQueue(queue)
    setMode(gameMode)
    setScore(0)
    setPhase('idle')
    setLastResult(null)
    setLastSpelt('')
    setGameResults([])
    setScreen('game')
  }

  function handleStartGame() {
    if (!userName.trim()) return
    const stats = getUserStats(userName)
    setUserStats(stats)
    startGame(buildWordQueue(level, stats), 'normal')
  }

  function handleStartRevision() {
    if (!userName.trim()) return
    const stats = getUserStats(userName)
    setUserStats(stats)
    startGame(buildRevisionQueue(level, stats), 'revision')
  }

  async function handleHearAgain() {
    await speak(currentWord, { rate: 0.3 })
  }

  async function handleUseSentence() {
    const sentence = SENTENCES[currentWord]
    if (sentence) await speak(sentence, { rate: 0.82 })
  }

  function handleStartSpelling() {
    setPhase('listening')
    startListening()
  }

  function handleResetSpelling() {
    resetListening()
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
    const newStats = getUserStats(userName)
    setUserStats(newStats)
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

  function handleFinishGame() {
    cancelSpeech()
    setScreen('complete')
  }

  function handleNextWord() {
    cancelSpeech()
    if (mode === 'revision') {
      const remaining = buildRevisionQueue(level, userStats)
      if (remaining.length === 0) { setScreen('complete'); return }
      setWordQueue(remaining)
    } else {
      setWordQueue(buildWordQueue(level, userStats))
    }
    setPhase('idle')
    setLastResult(null)
    setLastSpelt('')
  }

  // ── Screens ──

  if (screen === 'welcome') {
    const incorrectCount = WORD_LISTS[level].filter(
      w => userStats[w]?.lastResult === 'incorrect'
    ).length

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

          <div className="start-buttons">
            <button className="btn-primary" onClick={handleStartGame} disabled={!userName.trim()}>
              Start Game 🚀
            </button>
            <button
              className="btn-revision-start"
              onClick={handleStartRevision}
              disabled={!userName.trim() || incorrectCount === 0}
              title={incorrectCount === 0 ? 'No incorrect words to revise' : ''}
            >
              🔁 Revision
              {incorrectCount > 0
                ? <span className="revision-count">{incorrectCount} to review</span>
                : <span className="revision-count">nothing to review</span>}
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (screen === 'complete') {
    const total = gameResults.length
    const pct = total > 0 ? Math.round((score / total) * 100) : 0
    const message =
      pct === 100 ? 'Perfect score! Amazing! 🎉' :
      pct >= 80   ? 'Fantastic work! 🌟'          :
      pct >= 60   ? 'Good job! Keep practising! 👍' :
                    'Keep practising — you will get there! 💪'

    const levelWords   = WORD_LISTS[level]
    const lvlCorrect   = levelWords.filter(w => userStats[w]?.lastResult === 'correct').sort()
    const lvlIncorrect = levelWords.filter(w => userStats[w]?.lastResult === 'incorrect').sort()
    const lvlUntried   = levelWords.filter(w => !userStats[w]).sort()
    const lvlPct       = Math.round((lvlCorrect.length / levelWords.length) * 100)

    return (
      <div className="app">
        <div className="card complete-card">
          {mode === 'revision' && lvlIncorrect.length === 0
            ? <div className="bee">🌟</div>
            : <div className="bee">🏆</div>}
          <h2>{mode === 'revision' && lvlIncorrect.length === 0
            ? 'All Clear!'
            : 'Game Complete!'}</h2>
          {mode === 'revision' && lvlIncorrect.length === 0 && (
            <p className="revision-cleared">
              All incorrect {LEVEL_INFO[level].label.toLowerCase()} words have been cleared!
            </p>
          )}
          <div className="final-score">
            <span className="score-big">{score}</span>
            <span className="score-denom"> / {total}</span>
          </div>
          <p className="pct">{pct}%</p>
          <Stars score={score} total={total} />
          <p className="end-message">{message}</p>

          {gameResults.length > 0 && (
            <div className="word-stats">
              <p className="stats-heading">{userName ? `${userName}'s results` : 'This game'}</p>
              <div className="word-stats-header">
                <span className="w-name" />
                <span className="w-col-head">This game</span>
                <span className="w-col-head">All time</span>
              </div>
              {gameResults.map(({ word, correct }) => {
                const ws = userStats[word] || { correct: 0, incorrect: 0 }
                return (
                  <div key={word} className="word-stats-row">
                    <span className="w-name">{word.toUpperCase()}</span>
                    <span className={correct ? 'w-tick' : 'w-cross'}>{correct ? '✓' : '✗'}</span>
                    <span className="w-history">{ws.correct}✓ {ws.incorrect}✗</span>
                  </div>
                )
              })}
            </div>
          )}

          <div className="level-progress">
            <p className="stats-heading">{LEVEL_INFO[level].label} level progress</p>
            <p className="lvl-summary">
              <span className="lvl-correct">{lvlCorrect.length}</span>
              <span className="lvl-denom"> / {levelWords.length} correct</span>
              <span className="lvl-pct"> — {lvlPct}%</span>
            </p>
            <div className="lvl-bar-track">
              <div className="lvl-bar-fill" style={{ width: `${lvlPct}%` }} />
            </div>

            {lvlCorrect.length > 0 && (
              <div className="chip-group">
                <span className="chip-label chip-label-correct">Correct ({lvlCorrect.length})</span>
                <div className="chips">
                  {lvlCorrect.map(w => <span key={w} className="chip chip-correct">{w}</span>)}
                </div>
              </div>
            )}
            {lvlIncorrect.length > 0 && (
              <div className="chip-group">
                <span className="chip-label chip-label-incorrect">Needs practice ({lvlIncorrect.length})</span>
                <div className="chips">
                  {lvlIncorrect.map(w => <span key={w} className="chip chip-incorrect">{w}</span>)}
                </div>
              </div>
            )}
            {lvlUntried.length > 0 && (
              <div className="chip-group">
                <span className="chip-label chip-label-untried">Not yet tried ({lvlUntried.length})</span>
                <div className="chips">
                  {lvlUntried.map(w => <span key={w} className="chip chip-untried">{w}</span>)}
                </div>
              </div>
            )}
          </div>

          <button className="btn-primary" onClick={() => { setMode('normal'); setScreen('welcome') }}>
            Play Again 🔄
          </button>
        </div>
      </div>
    )
  }

  // ── Game screen ──
  const lvlStats = computeLevelStats(level, userStats)

  return (
    <div className="app">
      <div className="game-header">
        <span className="progress-text">
          {mode === 'revision'
            ? `${wordQueue.length} left to review`
            : `Word ${gameResults.length + 1}`}
        </span>
        <div className="header-center">
          {mode === 'revision' && <span className="revision-badge">Revision</span>}
          <button className="btn-finish" onClick={handleFinishGame}>Finish</button>
        </div>
        <div className="score-group">
          <span className="score-text">Score: {score} ⭐</span>
          <span className="level-stats">
            <span className="ls-correct">✓{lvlStats.correct}</span>
            <span className="ls-incorrect"> ✗{lvlStats.incorrect}</span>
            <span className="ls-new"> ·{lvlStats.notAnswered}</span>
          </span>
        </div>
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
              {SENTENCES[currentWord] && (
                <button className="btn-secondary" onClick={handleUseSentence}>
                  💬 Use in a sentence
                </button>
              )}
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

            <div className="btn-row">
              <button className="btn-secondary" onClick={handleResetSpelling}>
                🔄 Try Again
              </button>
              <button className="btn-done" onClick={handleDoneSpelling} disabled={!letters}>
                ✅ Done Spelling
              </button>
            </div>
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

            <div className="result-level-row">
              <span className="result-level-label">Next difficulty:</span>
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
            </div>

            <button className="btn-next" onClick={handleNextWord}>
              ➡️ Next Word
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
