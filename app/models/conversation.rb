class Conversation < ApplicationRecord
  has_many :direct_messages, -> { order(:created_at) }
  belongs_to :user_1, class_name: "User"
  belongs_to :user_2, class_name: "User"

  def other_user(current_user)
    user_1 == current_user ? user_2 : user_1
  end

end
