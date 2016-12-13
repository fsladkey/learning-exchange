json.events @events do |event|
  json.extract! event, :id, :name, :latitude, :longitude
  json.title event.name
end
json.groups @groups do |group|
  json.extract! group, :id, :name, :latitude, :longitude
  json.title group.name
end
json.users @users do |user|
  json.extract! user, :id, :username, :fullname, :latitude, :longitude
  json.title user.username
end
