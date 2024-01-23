import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeContext, ThemeContextProvider } from './components/context/ThemeContextProvider.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeContextProvider>
  </React.StrictMode>,
)
