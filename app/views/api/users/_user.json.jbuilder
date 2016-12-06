json.extract! user, :id, :username, :email, :firstname, :lastname, :fullname
json.notifications user.notifications
json.received_messages user.received_messages
