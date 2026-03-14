import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import '@tokens/index.css'
import '@components/Button/Button.css'
import '@components/Label/Label.css'
import '@components/Input/Input.css'
import '@components/Textarea/Textarea.css'
import '@components/Select/Select.css'
import '@components/Checkbox/Checkbox.css'
import '@components/RadioGroup/RadioGroup.css'
import '@components/Switch/Switch.css'
import '@components/Field/Field.css'
import './styles/docs.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
