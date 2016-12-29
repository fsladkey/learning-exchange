import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import configureWelcomeStore from '../../store/welcome_store'
import WelcomeApp from './welcome_app'
import SignInForm from './sign_in_form'
import SignUpBasics from './sign_up_basics'
import SignUpAdvanced from './sign_up_advanced'

const store = configureWelcomeStore()

const routes = (
  <Route path="/welcome" component={ WelcomeApp }>
    <IndexRoute component={ SignInForm } />
    <Route path="basics" component={ SignUpBasics } />
    <Route path="advanced" component={ SignUpAdvanced } />
  </Route>
)

export default function Root(props) {
  return (
    <Provider store={ store }>
      <Router history={ browserHistory } routes={ routes }>
      </Router>
    </Provider>
  )
}
