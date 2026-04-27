import { useState, useEffect } from 'react'
import { LEVEL_INFO } from '../data/level_info'

const SUBJECT_COLS = {
  general:   0,
  arts:      1,
  food:      2,
  geography: 3,
  science:   4,
  sports:    5,
}

// Full-size layout (desktop/large tablet)
const DESKTOP = { CELL_W: 96, CELL_H: 96, NODE_W: 76, NODE_H: 64 }
// Icon-only compact layout (mobile) — fits 6 cols in ~312px
const COMPACT  = { CELL_W: 52,  CELL_H: 52,  NODE_W: 40, NODE_H: 40 }

const COMPACT_BREAKPOINT = 820
const NUM_COLS = 6
const NUM_ROWS = 5

const COLOR_MAP = {
  yellow: { bg: '#fffbeb', border: '#f0b800', text: '#7a5f00', shadow: 'rgba(240,184,0,0.35)' },
  pink:   { bg: '#fce4ec', border: '#e91e63', text: '#880e4f', shadow: 'rgba(233,30,99,0.3)'  },
  blue:   { bg: '#e3f2fd', border: '#1976d2', text: '#0d47a1', shadow: 'rgba(25,118,210,0.3)' },
  green:  { bg: '#e8f5e9', border: '#388e3c', text: '#1b5e20', shadow: 'rgba(56,142,60,0.3)'  },
  purple: { bg: '#f3e5f5', border: '#9c27b0', text: '#4a148c', shadow: 'rgba(156,39,176,0.3)' },
}

function getGridPos(levelKey) {
  const match = levelKey.match(/^level_(\d+)_(.+)$/)
  if (!match) return null
  const num = parseInt(match[1])
  const subject = match[2]
  const col = SUBJECT_COLS[subject]
  if (col === undefined) return null
  return { row: num - 1, col }
}

export function LevelGraph({ levels, level, setLevel, getLevelStatus, isLevelCompleted }) {
  const [compact, setCompact] = useState(() => window.innerWidth <= COMPACT_BREAKPOINT)

  useEffect(() => {
    const check = () => setCompact(window.innerWidth <= COMPACT_BREAKPOINT)
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const { CELL_W, CELL_H, NODE_W, NODE_H } = compact ? COMPACT : DESKTOP
  const SVG_W = NUM_COLS * CELL_W
  const SVG_H = NUM_ROWS * CELL_H

  const posMap = {}
  for (const l of levels) {
    const pos = getGridPos(l)
    if (pos) posMap[l] = pos
  }

  const centerOf = (pos) => ({
    x: pos.col * CELL_W + CELL_W / 2,
    y: pos.row * CELL_H + CELL_H / 2,
  })

  const edges = []
  for (const l of levels) {
    const toPos = posMap[l]
    if (!toPos) continue
    for (const prereq of (LEVEL_INFO[l]?.prerequisites ?? [])) {
      const fromPos = posMap[prereq]
      if (!fromPos || fromPos.row === toPos.row) continue
      edges.push({
        key: `${prereq}->${l}`,
        from: centerOf(fromPos),
        to: centerOf(toPos),
        unlocked: getLevelStatus(l) === 'unlocked',
      })
    }
  }

  return (
    <div className="level-graph" style={{ width: SVG_W, height: SVG_H }}>
      <svg className="level-graph-svg" width={SVG_W} height={SVG_H} aria-hidden="true">
        {edges.map(({ key, from, to, unlocked }) => (
          <line
            key={key}
            x1={from.x} y1={from.y}
            x2={to.x}   y2={to.y}
            className={`graph-edge${unlocked ? ' graph-edge-unlocked' : ' graph-edge-locked'}`}
          />
        ))}
      </svg>

      {levels.map(l => {
        const pos = posMap[l]
        if (!pos) return null
        const status = getLevelStatus(l)
        if (status === 'hidden') return null

        const locked    = status === 'disabled'
        const info      = LEVEL_INFO[l]
        const colors    = COLOR_MAP[info.color]
        const completed = !locked && isLevelCompleted(l)
        const subject   = info.label.replace(/^Level \d+ /, '')

        return (
          <button
            key={l}
            className={[
              'graph-node',
              level === l ? 'graph-node-active'    : '',
              locked      ? 'graph-node-locked'    : '',
              completed   ? 'graph-node-completed' : '',
            ].filter(Boolean).join(' ')}
            style={{
              left:   pos.col * CELL_W + (CELL_W - NODE_W) / 2,
              top:    pos.row * CELL_H + (CELL_H - NODE_H) / 2,
              width:  NODE_W,
              height: NODE_H,
              '--node-bg':     locked ? '#f5f5f5'          : colors.bg,
              '--node-border': locked ? '#ddd'             : colors.border,
              '--node-text':   locked ? '#bbb'             : colors.text,
              '--node-shadow': locked ? 'rgba(0,0,0,0.08)' : colors.shadow,
            }}
            onClick={() => !locked && setLevel(l)}
            disabled={locked}
            title={
              locked
                ? `Complete first: ${info.prerequisites
                    .filter(p => !isLevelCompleted(p))
                    .map(p => LEVEL_INFO[p]?.label)
                    .join(', ')}`
                : info.label
            }
          >
            <div className="graph-node-top">
              {locked
                ? <span className="graph-node-lock">🔒</span>
                : <img src={`${import.meta.env.BASE_URL}icons/${info.icon}.svg`} alt="" className="graph-node-icon" />}
              {!compact && <span className="graph-node-stars">{'★'.repeat(info.stars)}</span>}
            </div>
            {!compact && <div className="graph-node-label">{subject}</div>}
            {completed && <span className="graph-node-check">✓</span>}
          </button>
        )
      })}
    </div>
  )
}
