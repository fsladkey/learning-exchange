# == Schema Information
#
# Table name: direct_messages
#
#  id          :integer          not null, primary key
#  sender_id   :integer          not null
#  receiver_id :integer          not null
#  body        :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class DirectMessage < ApplicationRecord
  include Notifiable
  validates :sender, :receiver, presence: true
  belongs_to :sender, class_name: :User
  belongs_to :receiver, class_name: :User
  belongs_to :conversation, touch: true

  before_validation :ensure_conversation

  def user_to_notify
    receiver
  end

  def notification_message
    "#{sender.fullname} has sent you a direct message."
  end

  private

  def ensure_conversation
    if (!conversation_id)
      self.conversation_id = Conversation.find_or_create_by_users(
        sender,
        receiver
      ).id
    end
  end

end
