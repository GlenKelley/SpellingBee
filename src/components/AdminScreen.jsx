import { useState } from 'react'
import '../App.css'

const KEY_STATS       = 'spellingbee_stats'
const KEY_COMPLETIONS = 'spellingbee_completions'
const KEY_EXCLUDED    = 'spellingbee_excluded_users'

export function getExcludedUsers() {
  try { return JSON.parse(localStorage.getItem(KEY_EXCLUDED) || '[]') }
  catch { return [] }
}

function saveExcludedUsers(users) {
  localStorage.setItem(KEY_EXCLUDED, JSON.stringify(users))
}

export function AdminScreen() {
  const [excluded, setExcluded]   = useState(getExcludedUsers)
  const [newUser, setNewUser]     = useState('')
  const [resetDone, setResetDone] = useState(false)
  const [confirmReset, setConfirmReset] = useState(false)

  function handleAdd() {
    const name = newUser.trim()
    if (!name || excluded.includes(name)) return
    const updated = [...excluded, name]
    saveExcludedUsers(updated)
    setExcluded(updated)
    setNewUser('')
  }

  function handleRemove(name) {
    const updated = excluded.filter(u => u !== name)
    saveExcludedUsers(updated)
    setExcluded(updated)
  }

  function handleReset() {
    localStorage.removeItem(KEY_STATS)
    localStorage.removeItem(KEY_COMPLETIONS)
    setResetDone(true)
    setConfirmReset(false)
  }

  return (
    <div className="app" style={{ '--app-bg': 'linear-gradient(160deg, #fff9e6 0%, #fff3cc 60%, #ffe5a0 100%)' }}>
      <div className="card admin-card">
        <div className="bee">🐝</div>
        <h1>Admin</h1>

        <div className="admin-section">
          <h2 className="admin-section-title">Reset Data</h2>
          <p className="admin-desc">
            Permanently delete all user stats and level completion records.
          </p>

          {resetDone ? (
            <p className="admin-success">✓ All data has been reset.</p>
          ) : confirmReset ? (
            <div className="admin-confirm-row">
              <span className="admin-confirm-label">Are you sure? This cannot be undone.</span>
              <button className="btn-danger" onClick={handleReset}>Yes, reset</button>
              <button className="btn-secondary" onClick={() => setConfirmReset(false)}>Cancel</button>
            </div>
          ) : (
            <button className="btn-danger" onClick={() => setConfirmReset(true)}>
              Reset All Data
            </button>
          )}
        </div>

        <div className="admin-section">
          <h2 className="admin-section-title">Leaderboard Exclusions</h2>
          <p className="admin-desc">
            Users listed here are hidden from all leaderboards.
          </p>

          {excluded.length === 0 ? (
            <p className="admin-empty">No excluded users.</p>
          ) : (
            <ul className="admin-user-list">
              {excluded.map(name => (
                <li key={name} className="admin-user-row">
                  <span className="admin-user-name">{name}</span>
                  <button className="btn-remove" onClick={() => handleRemove(name)}>
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}

          <div className="admin-add-row">
            <input
              className="name-input"
              type="text"
              placeholder="Username to exclude"
              value={newUser}
              maxLength={30}
              onChange={e => setNewUser(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleAdd()}
            />
            <button className="btn-primary admin-add-btn" onClick={handleAdd}>
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
