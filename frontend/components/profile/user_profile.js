import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../../actions/user_actions'
import { curentProfile } from '../../reducers/selectors'
import Spinner from '../shared/spinner'
import Profile from './profile'

class UserProfile extends Component {

  componentDidMount() {
    this.props.fetchUser(this.props.params.username)
  }

  render() {
    const { user } = this.props;
    if (!user) return <Spinner />
    return (
      <Profile user={ user } editable={ false } />
    )
  }
}

const mapStateToProps = (state, { params }) => ({
  user: curentProfile(state, params.username)
})

export default connect(
  mapStateToProps,
  { fetchUser: actions.fetchOneUser }
)(UserProfile)
