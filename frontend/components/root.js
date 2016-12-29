import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import configureStore from '../store'
import { receiveCurrentUser } from '../actions/session_actions'
import { syncHistoryWithStore } from 'react-router-redux'
import App from './app'
import HomePage from './homepage'
import Messages from './messages'
import Conversation from './messages/conversation'
import CurrentUserProfile from './profile/current_user_profile'
import UserProfile from './profile/user_profile'
import EventForm from './events/event_form'
import EventShow from './events/event_show'
import GroupForm from './groups/group_form'
import GroupShow from './groups/group_show'
import PageMissing from './error/page_missing'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)
document.addEventListener("DOMContentLoaded", () => {
  if (window.getCurrentUser) {
    store.dispatch(receiveCurrentUser(window.getCurrentUser()))
  }
})

const routes = (
  <Route path="/" component={ App }>
    <IndexRoute component={ HomePage } />
    <Route path="profile" component={ CurrentUserProfile } />
    <Route path="profile/:username" component={ UserProfile } />
    <Route path="messages" component={ Messages }>
      <Route path=":username" component={ Conversation } />
    </Route>
    <Route path="events/new" component={ EventForm } />
    <Route path="events/:id" component={ EventShow } />
    <Route path="groups/new" component={ GroupForm } />
    <Route path="groups/:id" component={ GroupShow } />
    <Route path="*" component={ PageMissing } />
  </Route>
)

export default function Root(props) {
  window.store = store
  return (
    <Provider store={ store }>
      <Router history={ history } routes={ routes }>
      </Router>
    </Provider>
  )
}
