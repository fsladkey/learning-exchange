import React, { Component } from 'react'

const csrf_token = document.getElementsByName('csrf-token')[0].content
//TODO: Add Spinner
export default class SignInForm extends Component {
  guestLogin = (e) => {
    const inputs = this.form.querySelectorAll('input')
    this.form.querySelector('#email-input').value = "guest@example.com"
    this.form.querySelector('#password-input').value = "starwars"
    this.form.submit()
  }

  render() {
    return (
      <form
        className="sign-in-form"
        action="/users/sign_in"
        method="POST"
        ref={ form => this.form = form }
        >
        <input
        type="hidden"
        name="authenticity_token"
        value={ csrf_token }
        />
        {/*<a className="oath facebook" href="/users/auth/facebook">
        <i className="fa fa-facebook" aria-hidden="true"/>
          Sign In with Facebook
        </a>
        <a className="oath google" href="/users/auth/google_oauth2">
          <i className="fa fa-google" aria-hidden="true"/>
          Sign In with Google
        </a>*/}
        {/*<hr />*/}
        <label htmlFor="email-input">Email</label>
        <input id="email-input" type="text" name="user[email]" placeholder="Email Address"/>
        <label htmlFor="password-input">Password</label>
        <input id="password-input" type="password" name="user[password]" placeholder="Password"/>
        <button>Log In</button>
        <hr />
        {/*<button onClick={ this.guestLogin } type="button">Guest</button>*/}
      </form>
    );
  }
}
