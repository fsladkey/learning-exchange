import React from 'react'
import { connect } from 'react-redux'
import NavBar from './navbar'
import { closeDropdown } from '../actions/dropdown_actions'

const handleClick = (closeDropdown, dropdown) => dropdown && closeDropdown()

function App({ children, closeDropdown, dropdown }) {
  return (
    <div onClick={ (e) => handleClick(closeDropdown, dropdown) } id="app">
      <NavBar />
      <main className="content-container">
        { children }
      </main>
    </div>
  )
}

const mapStateToProps = ({ dropdown }) => ({ dropdown })

export default connect(mapStateToProps, { closeDropdown })(App)
