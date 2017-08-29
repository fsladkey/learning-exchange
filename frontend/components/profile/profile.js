import React from 'react'
import { connect } from 'react-redux'
import ProfileComments from './profile_comments'
import ProfileSidebar from './profile_sidebar'
import TagList from '../shared/tag_list'
import UserPhoto from '../shared/user_photo'
import MessageButton from './message_button'
import ProfileBio from './profile_bio'
import { setModal } from '../../actions/modal_actions'
import { setFormField } from '../../actions/form_actions'
import { fadeIn } from '../../utils/misc'
import actions from '../../actions/user_actions'

function ProfileHeader({ isCurrentUser, user, setModal, setFormField, updateUser }) {
  const editProfile = () => {
    ["id", "username", "email", "firstname", "middlename", "lastname", "bio", "fullname", "lat", "lng", "zipcode"].forEach(field =>
      setFormField("user", field, user[field])
    )
    setModal("userForm")
  }
  const onAdd = (tag) => {
    updateUser({
      id: user.id,
      tag_names: (user.tags.map(tag => tag.name)).concat(tag)
    })
  }
  const onRemove = (tag) => {
    updateUser({
      id: user.id,
      tag_names: user.tags.map(tag => tag.name).filter(name => name !== tag)
    })
  }
  const editButton = isCurrentUser ? <button onClick={editProfile}><i className="fa fa-gear spin-on-hover" /></button> : null
  const messageButton = isCurrentUser ? null : <MessageButton user={user} />
  return (
    <section className="profile-header sub-header">
      <div className="profile-header-row">
        <UserPhoto user={ user } className="medium" />
        <section>
          <h1>{ user.fullname} { editButton }</h1>
          <hgroup>
            <h4>{ user.username }</h4>
          </hgroup>
          <hgroup>
            <h4>{ user.zipcode }</h4>
          </hgroup>
        </section>
      </div>
      { messageButton }
      <h3>Interests</h3>
      <TagList tags={user.tags} editable={isCurrentUser} onAdd={onAdd} onRemove={onRemove} />
      <ProfileBio user={user} />
    </section>
  )
}

function UserProfile(props) {
  return (
    <section className="profile" ref={ fadeIn }>
      <div className="profile-left">
        <ProfileHeader {...props}/>
      </div>
      <ProfileSidebar {...props}/>
    </section>
  )
}

export default connect(null, { setModal, setFormField, updateUser: actions.updateUser })(UserProfile)