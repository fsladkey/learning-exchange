import React from 'react'
import { connect} from 'react-redux'
import UserActions from '../../actions/user_actions'
import { preventDefault } from '../../utils/misc'

function ProfileForm({ value, onChange, onClick }) {
  return (
    <form onSubmit={preventDefault}>
      <textarea onChange={onChange}>{ value }</textarea>
      <button onClick={ onClick } className="lx-button">Save</button>
    </form>
  )
}

function Bio({ bio, onClick }) {
  return (
    <div>
      <p>{ bio }</p>
      <button onClick={ onClick } className="lx-button">Edit</button>
    </div>
  )
}

class ProfileBio extends React.Component {

  constructor(props) {
    super(props)
    this.state = { value: this.props.user.bio, editing: false }
  }

  onChange = (e) => {
    this.setState({ value: e.currentTarget.value })
  }

  toggleEditing = () => {
    this.setState({ editing: !this.state.editing })
  }

  submit = () => {
    debugger
    this.props.updateUser({ id: this.props.currentUser.id, bio: this.state.value })
      .then(() => this.setState({ editing: false }))
  }

  render() {
    const { user } = this.props
    const content = this.state.editing ?
      <ProfileForm value={ this.state.value } onChange={ this.onChange } onClick={this.submit }/> :
      <Bio bio={ this.props.currentUser.bio } onClick={this.toggleEditing}/>

    return (
      <section className="profile-bio">
        { content }
      </section>
    )
  }
}

export default connect(
  ({ currentUser }) => ({ currentUser }),
  { updateUser: UserActions.updateUser }
)(ProfileBio)
