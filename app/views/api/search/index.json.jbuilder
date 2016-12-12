json.events @events do |event|
  json.extract! event, :id, :name
end
json.groups @groups do |group|
  json.extract! group, :id, :name
end
json.users @users do |user|
  json.extract! user, :id, :username, :fullname
end
