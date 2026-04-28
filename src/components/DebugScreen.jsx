import { useState, useEffect, useRef } from 'react'
import packageJson from '../../package.json'
import { transcriptToLetters } from '../hooks/useSpeechRecognition'

const SR_API = window.SpeechRecognition || window.webkitSpeechRecognition

function row(label, value) {
  return (
    <tr key={label}>
      <td style={styles.label}>{label}</td>
      <td style={styles.value}>{String(value)}</td>
    </tr>
  )
}

function LetterComparison({ transcript }) {
  const letters = transcriptToLetters(transcript)

  return (
    <div style={{ marginBottom: '12px' }}>
      <div style={styles.compareRow}>
        <span style={styles.compareLabel}>Raw text</span>
        <span style={styles.rawText}>{transcript || '—'}</span>
      </div>
      <div style={styles.compareRow}>
        <span style={styles.compareLabel}>Parsed letters</span>
        <div style={styles.boxes}>
          {letters
            ? letters.toUpperCase().split('').map((ch, i) => (
                <div key={i} style={styles.lbox}>{ch}</div>
              ))
            : <span style={{ color: '#888' }}>—</span>
          }
        </div>
      </div>
    </div>
  )
}

export function DebugScreen() {
  const [micPermission, setMicPermission]   = useState('checking…')
  const [isListening, setIsListening]       = useState(false)
  const [transcript, setTranscript]         = useState('')
  const [log, setLog]                       = useState([])
  const recogRef = useRef(null)

  useEffect(() => {
    if (!navigator.permissions) { setMicPermission('permissions API unsupported'); return }
    navigator.permissions.query({ name: 'microphone' })
      .then(r => {
        setMicPermission(r.state)
        r.onchange = () => setMicPermission(r.state)
      })
      .catch(() => setMicPermission('query failed'))
  }, [])

  function addLog(msg) {
    const ts = new Date().toLocaleTimeString('en', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit', fractionalSecondDigits: 1 })
    setLog(prev => [`${ts}  ${msg}`, ...prev].slice(0, 80))
  }

  function startTest() {
    if (!SR_API) { addLog('ERROR: no SpeechRecognition API found'); return }
    if (recogRef.current) { recogRef.current.abort(); recogRef.current = null }

    const r = new SR_API()
    r.continuous     = true
    r.interimResults = true
    r.lang           = 'en-AU'

    r.onstart  = () => { addLog('onstart'); setIsListening(true) }
    r.onspeechstart = () => addLog('onspeechstart')
    r.onspeechend   = () => addLog('onspeechend')
    r.onaudiostart  = () => addLog('onaudiostart')
    r.onaudioend    = () => addLog('onaudioend')
    r.onnomatch     = () => addLog('onnomatch')

    r.onresult = (e) => {
      let final = '', interim = ''
      for (let i = 0; i < e.results.length; i++) {
        const t = e.results[i][0].transcript
        if (e.results[i].isFinal) final += t + ' '
        else interim += t
      }
      const combined = (final + interim).trim()
      setTranscript(combined)
      addLog(`onresult: "${combined}" (final=${!!final.trim()})`)
    }

    r.onerror = (e) => {
      addLog(`onerror: ${e.error}${e.message ? ' — ' + e.message : ''}`)
      if (e.error !== 'no-speech' && e.error !== 'aborted') {
        setIsListening(false)
        recogRef.current = null
      }
    }

    r.onend = () => {
      addLog('onend')
      setIsListening(false)
      recogRef.current = null
    }

    recogRef.current = r
    try {
      r.start()
      addLog('start() called')
    } catch (err) {
      addLog(`start() threw: ${err.message}`)
    }
  }

  function stopTest() {
    if (!recogRef.current) return
    recogRef.current.stop()
    addLog('stop() called')
  }

  function clearLog() { setLog([]); setTranscript('') }

  const ua = navigator.userAgent
  const isSafari   = /Safari/i.test(ua) && !/Chrome/i.test(ua)
  const isChrome   = /Chrome/i.test(ua) && !/Edge/i.test(ua)
  const isFirefox  = /Firefox/i.test(ua)
  const browserName = isSafari ? 'Safari' : isChrome ? 'Chrome' : isFirefox ? 'Firefox' : 'Other'

  return (
    <div style={styles.page}>
      <h1 style={styles.h1}>🐝 Debug</h1>

      <section style={styles.section}>
        <h2 style={styles.h2}>App</h2>
        <table style={styles.table}><tbody>
          {row('Version',  packageJson.version)}
          {row('Base URL', import.meta.env.BASE_URL)}
          {row('Mode',     import.meta.env.MODE)}
        </tbody></table>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>Device / Browser</h2>
        <table style={styles.table}><tbody>
          {row('Browser',        browserName)}
          {row('Screen',         `${window.screen.width}×${window.screen.height} @ ${window.devicePixelRatio}x`)}
          {row('Viewport',       `${window.innerWidth}×${window.innerHeight}`)}
          {row('Touch',          'ontouchstart' in window ? 'yes' : 'no')}
          {row('User Agent',     ua)}
        </tbody></table>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>Speech Recognition</h2>
        <table style={styles.table}><tbody>
          {row('window.SpeechRecognition',       !!window.SpeechRecognition)}
          {row('window.webkitSpeechRecognition', !!window.webkitSpeechRecognition)}
          {row('API available',                  !!SR_API)}
          {row('Microphone permission',          micPermission)}
        </tbody></table>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>Microphone Test</h2>
        <div style={styles.btnRow}>
          <button
            style={{ ...styles.btn, background: isListening ? '#e53935' : '#4caf50' }}
            onClick={isListening ? stopTest : startTest}
          >
            {isListening ? '⏹ Stop' : '🎤 Start Listening'}
          </button>
          <button style={{ ...styles.btn, background: '#888' }} onClick={clearLog}>
            Clear
          </button>
        </div>

        <p style={styles.statusLine}>
          Status: <strong>{isListening ? '🔴 listening' : '⚫ idle'}</strong>
        </p>

        <LetterComparison transcript={transcript} />

        <div style={styles.logBox}>
          {log.length === 0
            ? <span style={{ color: '#888' }}>— no events yet —</span>
            : log.map((line, i) => <div key={i} style={styles.logLine}>{line}</div>)
          }
        </div>
      </section>
    </div>
  )
}

const styles = {
  page: {
    fontFamily: 'ui-monospace, "Cascadia Code", "Source Code Pro", monospace',
    fontSize: '13px',
    lineHeight: 1.5,
    maxWidth: '680px',
    margin: '0 auto',
    padding: '20px 16px 60px',
    color: '#1a1a1a',
  },
  h1: { fontSize: '1.4rem', fontWeight: 900, margin: '0 0 20px' },
  h2: { fontSize: '0.9rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#666', margin: '0 0 8px' },
  section: { marginBottom: '28px' },
  table: { borderCollapse: 'collapse', width: '100%' },
  label: { padding: '4px 12px 4px 0', color: '#666', whiteSpace: 'nowrap', verticalAlign: 'top', width: '1%' },
  value: { padding: '4px 0', wordBreak: 'break-all' },
  btnRow: { display: 'flex', gap: '10px', marginBottom: '12px', flexWrap: 'wrap' },
  btn: {
    color: '#fff', border: 'none', borderRadius: '8px',
    padding: '10px 20px', fontSize: '0.95rem', fontWeight: 700,
    cursor: 'pointer',
  },
  statusLine: { margin: '0 0 8px' },
  transcript: {
    background: '#e8f5e9', border: '1px solid #4caf50', borderRadius: '6px',
    padding: '8px 12px', margin: '0 0 10px', wordBreak: 'break-all',
  },
  logBox: {
    background: '#1a1a1a', color: '#e0e0e0', borderRadius: '8px',
    padding: '10px 12px', maxHeight: '260px', overflowY: 'auto',
    fontSize: '12px',
  },
  logLine: { padding: '1px 0', borderBottom: '1px solid #2a2a2a' },
  compareRow: { display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '8px' },
  compareLabel: { width: '90px', flexShrink: 0, color: '#888', paddingTop: '2px' },
  rawText: {
    background: '#f5f5f5', border: '1px solid #ddd', borderRadius: '6px',
    padding: '4px 10px', wordBreak: 'break-all', flex: 1,
  },
  boxes: { display: 'flex', flexWrap: 'wrap', gap: '5px', flex: 1 },
  lbox: {
    width: '40px', height: '40px', border: '2px solid #1976d2',
    borderRadius: '8px', background: '#e3f2fd', color: '#0d47a1',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: '1.2rem', fontWeight: 900, fontFamily: 'inherit',
  },
}
