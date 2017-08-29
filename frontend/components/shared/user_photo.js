import React from 'react'

function getInitials(user) {
  if (user.firstname && user.lastname) {
    return `${user.firstname[0]} ${user.lastname[0]}`.toUpperCase() 
  }
  return user.username[0].toUpperCase()
}

export default function UserPhoto({ user, className }) {
  const initials = user.medium_avatar ? '' : getInitials(user)
  const src = className === "medium" ?
    user.medium_avatar :
    user.thumb

  return (
    <div className={ `user-photo ${className}` }>
      <strong className={`initials ${className}`}>
        { initials }
      </strong>
      <img src={ src }/>
    </div>
  )
}
