import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import RimacApp from './RimacApp.tsx'
import './index.css'
import { store } from './common/redux/store.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename='/rimac-front'>
        <RimacApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
