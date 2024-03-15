import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import RimacApp from './RimacApp.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename='/rimac-front'>
      <RimacApp />
    </BrowserRouter>
  </React.StrictMode>,
)
