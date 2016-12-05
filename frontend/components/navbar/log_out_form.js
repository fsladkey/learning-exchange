import React from 'react'

const csrf_token = document.getElementsByName('csrf-token')[0].content

export default function LogOutForm(props) {
  return (
    <form action='/users/sign_out' method='POST'>
      <input type='hidden' name="_method" value="DELETE" />
      <input type='hidden' name='authenticity_token' value={ csrf_token } />
      <button>Sign Out</button>
    </form>
  )
}
