import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import React from 'react'
import { Provider } from 'react-redux'
import { hot } from 'react-hot-loader'

import configureStore from '../store'
import { receiveCurrentUser } from '../actions/session_actions'
import { dispatchSingleResult } from '../actions/generic_actions'
import { syncHistoryWithStore } from 'react-router-redux'
import { normalize } from 'normalizr'
import schemas from '../utils/schemas'
import actions from '../actions/conversation_actions'
import App from './app'
import HomePage from './homepage'
import Messages from './messages'
import Conversation from './messages/conversation'
import CurrentUserProfile from './profile/current_user_profile'
import UserProfile from './profile/user_profile'
import EventForm from './events/event_form'
import EventChat from './events/event_chat'
import EventMembers from './events/event_members'
import EventShow from './events/event_show'
import EventLocation from './events/event_location'
import GroupForm from './groups/group_form'
import GroupShow from './groups/group_show'
import GroupChat from './groups/group_chat'
import GroupMembers from './groups/group_members'
import MemberForm from './groups/member_form'
import GroupEvents from './groups/group_events'
import TagShow from './tags/tag_show'
import PageMissing from './error/page_missing'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)
document.addEventListener("DOMContentLoaded", () => {
  if (window.getCurrentUser) {
    const currentUser = window.getCurrentUser()
    dispatchSingleResult(store.dispatch, 'user')(currentUser)
    store.dispatch(receiveCurrentUser(currentUser))
  }
})

const markAsRead = (nextState) => {
  store.dispatch(
    actions.updateConversation({ id: nextState.params.username })
  )
}

const routes = (
  <Route path="/" component={ App }>
    <IndexRoute component={ CurrentUserProfile } />
    <Route path="profile" component={ CurrentUserProfile } />
    <Route path="profile/:username" component={ UserProfile } />
    <Route path="messages" component={ Messages }>
      <Route path=":username" component={ Conversation } onEnter={ markAsRead }/>
    </Route>
    <Route path="events/new" component={ EventForm } />
    <Route path="events/:id" component={ EventShow }>
      <IndexRoute component={ EventLocation } />
      <Route path="updates" component={ EventChat } />
      <Route path="attendees" component={ EventMembers } />
    </Route>
    <Route path="groups/new" component={ GroupForm } />
    <Route path="groups/:id" component={ GroupShow }>
      <IndexRoute component={ GroupEvents } />
      <Route path="events" component={ GroupEvents } />
      <Route path="chat" component={ GroupChat } />
      <Route path="members" component={ GroupMembers } />
      <Route path="members/new" component={MemberForm } />
    </Route>
    <Route path="tags/:tagname" component={ TagShow } />
    <Route path="*" component={ PageMissing } />
  </Route>
)

function Root(props) {
  window.store = store;
  return (
    <Provider store={ store }>
      <Router history={ history } routes={ routes }>
      </Router>
    </Provider>
  )
}

export default hot(module)(Root)