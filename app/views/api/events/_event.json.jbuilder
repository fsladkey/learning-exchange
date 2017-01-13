json.extract! event, :id, :name, :description

json.tags event.tags do |tag|
  json.extract! tag, :id, :name
end
