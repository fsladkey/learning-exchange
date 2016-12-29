json.extract! message, :id, :body, :sender_id, :receiver_id, :created_at
json.other_user do
  json.extract! message.other_user(current_user), :id, :username, :fullname
end
json.sender do
  json.extract! message.sender, :id, :username, :fullname
end
json.receiver do
  json.extract! message.receiver, :id, :username, :fullname
end
