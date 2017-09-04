import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../../actions/user_actions'
import { currentProfile } from '../../reducers/selectors'
import Spinner from '../shared/spinner'
import Profile from './profile'

class UserProfile extends Component {

  componentDidMount() {
    this.props.fetchUser(this.props.params.username)
  }

  render() {
    const { user, currentUser } = this.props;
    if (!user) return <Spinner />
    return (
      <Profile user={ user } editable={ currentUser.admin } />
    )
  }
}

const mapStateToProps = (state, { params }) => ({
  user: currentProfile(state, params.username),
  currentUser: state.currentUser
})

export default connect(
  mapStateToProps,
  { fetchUser: actions.fetchOneUser }
)(UserProfile)
