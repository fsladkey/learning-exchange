## Users
| Col             | Type   | misc   |
| ----------------|--------| -------|
| firstname       | string |        |
| lastname        | string |        |
| email           | string |        |
| username        | string |        |
| password_digest | string |        |
| session_token   | string |        |
| zipcode         | string | len(5) |
| latitude        | float  |        |
| longitude       | float  |        |

## Groups
| Col             | Type   | misc   |
| ----------------|--------| -------|
| name            | string |        |
| description     | string |        |

## Membership
| Col             | Type    | misc   |
| ----------------|---------| -------|
| group_id        | integer |        |
| user_id         | integer |        |

## Event
| Col             | Type    | misc   |
| ----------------|---------| -------|
| title           | string  |        |
| description     | text    |        |
| group_id        | integer |        |
| creator_id      | integer |        |
| city            | string  |        |
| state           | string  |        |
| zipcode         | string  |        |
| latitude        | float   |        |
| longitude       | float   |        |

## Invitations
| Col             | Type    | misc   |
| ----------------|---------| -------|
| event_id        | integer |        |
| inviter_id      | integer |        |
| invitee_id      | integer |        |

## Attendance
| Col             | Type    | misc   |
| ----------------|---------| -------|
| event_id        | integer |        |
| user_id         | integer |        |

## Comments
| Col              | Type    | misc   |
| -----------------|---------| -------|
| author_id        | integer |        |
| commentable_id   | integer |        |
| commentable_type | string  |        |
| body             | text    |        |
| deleted          | bool    |        |

## Tagging
| Col           | Type    | misc   |
| --------------|---------| -------|
| tag_id        | integer |        |
| taggable_id   | integer |        |
| taggable_type | string  |        |

## Tag
| Col           | Type    | misc   |
| --------------|---------| -------|
| name          | string  |        |
