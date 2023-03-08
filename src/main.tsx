import React from 'react'
import ReactDOM from 'react-dom/client'
import { SignupForm } from './pages/SignUp'
import './assets/styles/App.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <SignupForm />
  </React.StrictMode>,
)