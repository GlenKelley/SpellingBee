import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AdminScreen } from './components/AdminScreen.jsx'
import { DebugScreen } from './components/DebugScreen.jsx'

const path = window.location.pathname
const isAdmin = path.endsWith('/admin')
const isDebug = path.endsWith('/debug')

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {isAdmin ? <AdminScreen /> : isDebug ? <DebugScreen /> : <App />}
  </StrictMode>,
)
