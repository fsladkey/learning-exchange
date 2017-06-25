json.extract! group, :id, :name, :description

json.events group.events do |event|
  json.partial! "api/events/event.json", event: event
end

json.tags group.tags do |tag|
  json.extract! tag, :id, :name
end
