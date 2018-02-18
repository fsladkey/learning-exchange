json.extract! message, :id, :body, :sender_id, :chattable_id, :chattable_type, :created_at
json.sender do
    json.extract! message.sender, :id, :firstname, :lastname
end
