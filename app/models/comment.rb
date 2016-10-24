class Comment < ApplicationRecord
  validates :body, :author, presence: true

  belongs_to :commentable, polymorphic: true
  belongs_to :author, class_name: :User
end
