json.extract! conversation, :id, :updated_at
json.other_user do
  other_user = conversation.other_user(current_user)
  json.extract! other_user, :id, :username, :fullname
end
json.messages conversation.direct_messages do |message|
  json.partial! "api/direct_messages/direct_message.json", message: message
end
