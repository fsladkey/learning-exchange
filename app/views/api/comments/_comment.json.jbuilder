json.extract! comment, :id, :body, :commentable_id, :commentable_type, :created_at
json.pretty_time time_ago_in_words(comment.created_at) + " ago"
json.author do
  json.extract! comment.author, :id, :username, :fullname
end
