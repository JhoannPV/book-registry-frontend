import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BookRegistryApp } from './BookRegistryApp'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BookRegistryApp />
  </StrictMode>,
)