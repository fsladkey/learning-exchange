json.array! @messages do |message|
  json.partial! "chat_message", message: message
end
