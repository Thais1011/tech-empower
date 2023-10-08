import React from 'react'
import ReactDOM from 'react-dom/client'
import {Login} from './pages/Login.jsx'
import { Register } from './pages/Register.jsx'
import "./global.css"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Login />
    <Register />
  </React.StrictMode>,
)
