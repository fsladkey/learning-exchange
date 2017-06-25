import React, { Component } from 'react'
import { connect } from 'react-redux'
import Profile from './profile'
import Spinner from '../shared/spinner'
import { fetchCurrentUser } from '../../actions/session_actions'

class CurrentUserProfile extends Component {
  
  constructor(props) {
    super(props)
    this.state = { fetched: false }
  }
  componentDidMount() {
    this.props.fetchCurrentUser().then(() => this.setState({ fetched: true }))
  }

  render() {
    const { currentUser } = this.props
    const { fetched } = this.state
    if (!fetched) return <Spinner />
    return (
      <Profile user={ currentUser } editable={ true } />
    )
  }
}

const mapStateToProps = ({ currentUser }) => ({ currentUser })
export default connect(mapStateToProps, { fetchCurrentUser })(CurrentUserProfile)
