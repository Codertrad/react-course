import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './globals.css'
import { CounterApp } from './CounterApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CounterApp value={0} />
  </StrictMode>,
)
