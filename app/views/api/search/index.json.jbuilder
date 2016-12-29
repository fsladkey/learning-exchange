json.events @events do |event|
  json.partial! "search_result", result: event
  json.extract! event, :name, :description#, :date
end
json.groups @groups do |group|
  json.partial! "search_result", result: group
  json.extract! group, :name, :description
end
json.users @users do |user|
  json.partial! "search_result", result: user
  json.extract! user, :username, :fullname, :email
end
