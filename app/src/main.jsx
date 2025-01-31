import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Cbc from './components/Cbc.jsx'
import Fbc from './components/Fbc.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Cbc></Cbc>
    <Fbc></Fbc>
  </StrictMode>,
)
