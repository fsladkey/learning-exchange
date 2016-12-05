import React from 'react'
import { connect } from 'react-redux'
import Profile from './profile'

function CurrentUserProfile({ currentUser }) {
  return (
    <Profile user={ currentUser } editable={ true } />
  )
}

const mapStateToProps = ({ currentUser }) => ({ currentUser })
export default connect(mapStateToProps)(CurrentUserProfile)
