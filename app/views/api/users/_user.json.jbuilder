json.extract! user, :id, :username, :email, :firstname, :lastname, :fullname, :lat, :lng, :zipcode
json.thumb user.avatar.url(:thumb)
json.medium_avatar user.avatar.url(:medium)
json.notifications user.recent_notifications do |notification|
  json.partial! "api/notifications/notification.json", notification: notification
end

json.unseen_messages user.unseen_messages do |message|
  json.partial! "api/direct_messages/direct_message.json", message: message
end

json.groups user.groups do |group|
  json.extract! group, :id, :name
end

json.events user.events_to_attend do |event|
  json.extract! event, :id, :name
end

json.comments user.comments do |comment|
  json.partial! "api/comments/comment.json", comment: comment
end

json.tags user.tags do |tag|
  json.extract! tag, :id, :name
end
