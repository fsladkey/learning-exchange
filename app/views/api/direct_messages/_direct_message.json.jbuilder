json.extract! message, :id, :body, :sender_id, :receiver_id, :created_at, :seen
json.sender do
  json.extract! message.sender, :id, :firstname, :lastname
  json.thumb message.sender.avatar.url(:thumb)
  json.medium_avatar message.sender.avatar.url(:medium)
end
