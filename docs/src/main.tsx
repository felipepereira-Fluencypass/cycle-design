import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import '@tokens/index.css'
import '@components/Button/Button.css'
import '@components/Checkbox/Checkbox.css'
import '@components/Switch/Switch.css'
import '@components/Alert/Alert.css'
import '@components/Skeleton/Skeleton.css'
import '@components/Spinner/Spinner.css'
import './styles/docs.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
