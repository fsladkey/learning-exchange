import React from 'react'

const csrf_token = document.getElementsByName('csrf-token')[0].content
export default function SignUpBasics(props) {
  return (
      <form className="sign-in-form" action="/session" method="POST">
        <input
        type="hidden"
        name="authenticity_token"
        value={ csrf_token }
        />
        <label htmlFor="email-input">Email</label>
        <input id="email-input" type="text" name="user[email]" placeholder="Email Address"/>
        <label htmlFor="password-input">Password</label>
        <input id="password-input" type="password" name="user[password]" placeholder="Password"/>
        <button>Log In</button>
      </form>
  );
}
