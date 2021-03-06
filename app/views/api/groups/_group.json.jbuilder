json.extract! group, :id, :name, :description, :chat_enabled

json.events group.events do |event|
  json.partial! "api/events/event.json", event: event
end

json.tags group.tags do |tag|
  json.extract! tag, :id, :name
end

json.members group.members do |member|
  json.extract! member, :id, :fullname, :firstname, :lastname, :username
end

json.memberships group.memberships do |membership|
  json.extract! membership, :id, :group_id, :member_id, :active, :digest_active
end
