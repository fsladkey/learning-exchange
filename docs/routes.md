### Static Pages Controller
`GET /` root

### Search Controller
`GET /api/search` search site for users/groups/events/tags

### Notifications Controller
`PATCH /api/notifications/:id`

### DirectMessages Controller
`POST /api/users/:user_id/direct_messages/`
`POST /api/groups/:group_id/chat_messages/`
`PATCH /api/chat_messages/:id`
`DELETE /api/chat_messages/:id`

### Groups Controller
`GET /api/groups/`
`GET /api/session/groups/`
`POST /api/groups/`
`PATCH /api/groups/`
`DELETE /api/groups/`

### Events Controller
`GET /api/events/`
`GET /api/session/events/`
`POST /api/events/`
`PATCH /api/events/`
`DELETE /api/events/`
