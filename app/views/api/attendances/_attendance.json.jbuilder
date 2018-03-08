json.extract! attendance, :id, :event_id, :user_id, :created_at
json.user do
  json.extract! attendance.user, :id, :username, :fullname
end