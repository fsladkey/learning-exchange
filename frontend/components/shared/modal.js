import React from 'react'
import { connect } from 'react-redux'
import { setModal } from '../../actions/modal_actions'
import { stopProp } from '../../utils/misc'
import EventForm from '../events/event_form'
import UserForm from '../profile/user_form'

const modalTypes = {
  eventForm: EventForm,
  userForm: UserForm,
}

function Modal({ modal, setModal }) {
  if (!modal) return null

  const handleClick = (e) => setModal(null)
  const ModalContent = modalTypes[modal]
  return (
    <div onClick={ handleClick } className="modal-container">
      <div onClick={ stopProp } className="lex-modal-content">
        <ModalContent />
      </div>
    </div>
  )
}

const mapStateToProps = ({ modal }) => ({ modal })

export default connect(mapStateToProps, { setModal })(Modal)
