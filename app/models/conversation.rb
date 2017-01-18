# == Schema Information
#
# Table name: conversations
#
#  id         :integer          not null, primary key
#  user_1_id  :integer
#  user_2_id  :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Conversation < ApplicationRecord
  has_many :direct_messages, -> { order(:created_at) }
  belongs_to :user_1, class_name: "User"
  belongs_to :user_2, class_name: "User"

  def other_user(current_user)
    user_1 == current_user ? user_2 : user_1
  end

  def self.find_or_create_by_users(user1, user2)
    c = Conversation.where(user_1_id: user1.id, user_2_id: user2.id)
      .or(Conversation.where(user_1_id: user2.id, user_2_id: user1.id))
    c.empty? ? Conversation.create!(user_1_id: user2.id, user_2_id: user1.id) : c.first
  end

end
