import React from 'react'
import { connect } from 'react-redux'
import NavBar from './navbar'
import Modal from './shared/modal'
import { closeDropdown } from '../actions/dropdown_actions'
import { setModal } from '../actions/modal_actions'

function App({ children, closeDropdown, dropdown, currentUser }) {
  const handleClick = (e) => {
    dropdown && closeDropdown()
  }

  return (
    <div onClick={ handleClick } id="app">
      <Modal />
      <NavBar />
      <main className="content-container">
        { children }
      </main>
    </div>
  )
}

const mapStateToProps = ({ dropdown, modal }) => ({ dropdown, modal })

export default connect(mapStateToProps, { closeDropdown, setModal })(App)
