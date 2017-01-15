import React from 'react'
import ProfileComments from './profile_comments'
import ProfileSidebar from './profile_sidebar'
import TagList from '../shared/tag_list'

function ProfileHeader({ user }) {
  return (
    <section className="profile-header sub-header">
      <div className="profile-header-row">
        <img className="profile-image"/>
        <section>
          <h1>{ user.fullname}</h1>
          <hgroup>
            <h4>{ user.username }</h4>
            <h4>{ user.email }</h4>
          </hgroup>
        </section>
      </div>
      <h3>Interests</h3>
      <TagList tags={ user.tags }/>
    </section>
  )
}

export default function UserProfile({ user, editable }) {
  return (
    <section className="profile">
      <div className="profile-left">
        <ProfileHeader user={ user }/>
        <ProfileComments user={ user } editable={ editable }/>
      </div>
      <ProfileSidebar user={ user }/>
    </section>
  )
}
