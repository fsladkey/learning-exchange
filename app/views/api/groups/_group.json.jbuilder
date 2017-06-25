json.extract! group, :id, :name, :description

json.events group.events do |event|
  json.partial! "api/events/event.json", event: event
end

json.tags group.tags do |tag|
  json.extract! tag, :id, :name
end

json.members group.members do |member|
  json.extract! member, :id, :fullname, :firstname, :lastname, :username
end
