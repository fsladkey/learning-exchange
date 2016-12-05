import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import configureStore from '../store'
import App from './app'
import HomePage from './homepage'
import Messages from './messages'
import CurrentUserProfile from './profile/current_user_profile'
import UserProfile from './profile/user_profile'
import EventForm from './events/event_form'
import EventShow from './events/event_show'
import GroupForm from './groups/group_form'
import GroupShow from './groups/group_show'

export default function Root(props) {
  const preloadedState = {}
  if (window.getCurrentUser) {
    preloadedState.currentUser = window.getCurrentUser()
  }
  const store = configureStore(preloadedState)
  window.store = store

  return (
    <Provider store={ store }>
      <Router history={ browserHistory }>
        <Route path="/" component={ App }>
          <IndexRoute component={ HomePage } />
          <Route path="profile" component={ CurrentUserProfile } />
          <Route path="profile/:username" component={ UserProfile } />
          <Route path="messages" component={ Messages } />
          <Route path="events/new" component={ EventForm } />
          <Route path="events/:id" component={ EventShow } />
          <Route path="groups/new" component={ GroupForm } />
          <Route path="groups/:id" component={ GroupShow } />
        </Route>
      </Router>
    </Provider>
  )
}
