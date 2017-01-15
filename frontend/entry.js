import React from 'react'
import ReactDOM from 'react-dom'
import Root from './components/root'
import Welcome from './components/welcome'

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('content')
  const welcome = document.getElementById('welcome-content')
  if (root) return ReactDOM.render(<Root />, root)
  return ReactDOM.render(<Welcome />, welcome)
})
