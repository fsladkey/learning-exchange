import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUser } from '../../actions/user_actions'
import Profile from './profile'

class UserProfile extends Component {

  componentDidMount() {
    this.props.fetchUser(this.props.params.id)
  }

  render() {
    const { user } = this.props;
    if (!user) return null;
    return (
      <Profile user={ user } editable={ false } />
    )
  }
}

const mapStateToProps = ({ users }, { params }) => ({ user: users[params.id] })
export default connect(mapStateToProps, { fetchUser })(UserProfile)
