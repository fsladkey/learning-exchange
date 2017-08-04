json.extract! event, :id, :name, :group_id, :creator_id, :description, :lat, :lng, :address, :start_time, :end_time

json.group do 
  json.extract! event.group, :id, :name
end

json.tags event.tags do |tag|
  json.extract! tag, :id, :name
end

json.attending_users event.attending_users do |user|
  json.extract! user, :id, :fullname, :firstname, :lastname, :username
end
