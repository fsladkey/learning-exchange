json.extract! event, :id, :name, :group_id, :creator_id, :description, :lat, :lng, :start, :end

json.tags event.tags do |tag|
  json.extract! tag, :id, :name
end

json.attending_users event.attending_users do |user|
  json.extract! user, :id, :fullname, :username
end
