import React from 'react'
import ProfileComments from './profile_comments'
import ProfileSidebar from './profile_sidebar'
import TagList from '../shared/tag_list'

function ProfileHeader({ user }) {
  return (
    <section className="profile-header">
      <h1>{ user.fullname}</h1>
      <hgroup>
        <h4>{ user.username }</h4>
        <h4>{ user.email }</h4>
      </hgroup>
      <h3>Interests</h3>
      <TagList tags={ user.tags }/>
    </section>
  )
}

export default function UserProfile({ user }) {
  return (
    <section className="profile">
      <div>
        <ProfileHeader user={ user }/>
        <ProfileComments user={ user }/>
      </div>
      <ProfileSidebar user={ user }/>
    </section>
  )
}
