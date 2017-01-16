json.extract! group, :id, :name, :description

json.tags group.tags do |tag|
  json.extract! tag, :id, :name
end

json.chat_messages group.chat_messages do |message|

end
