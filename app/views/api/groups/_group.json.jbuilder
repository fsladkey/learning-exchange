json.extract! group, :id, :name, :description

json.tags group.tags do |tag|
  json.extract! tag, :id, :name
end
