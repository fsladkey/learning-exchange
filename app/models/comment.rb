# == Schema Information
#
# Table name: comments
#
#  id               :integer          not null, primary key
#  body             :text
#  author_id        :integer
#  deleted          :boolean          default(FALSE)
#  commentable_type :string
#  commentable_id   :integer
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

class Comment < ApplicationRecord
  validates :body, :author, presence: true

  belongs_to :commentable, polymorphic: true
  belongs_to :author, class_name: :User
end
