json.extract! user, :id, :username, :email, :firstname, :lastname, :fullname, :lat, :lng
json.notifications user.recent_notifications do |notification|
  json.partial! "api/notifications/notification.json", notification: notification
end
json.new_notifications user.recent_notifications.to_a.count { |n| !n.seen? }
json.received_messages user.received_messages

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
