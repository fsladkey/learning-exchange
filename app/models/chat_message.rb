# == Schema Information
#
# Table name: chat_messages
#
#  id             :integer          not null, primary key
#  sender_id      :integer          not null
#  chattable_id   :integer          not null
#  chattable_type :string           not null
#  body           :string           not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class ChatMessage < ApplicationRecord
  validates :sender, :chattable, presence: true
  belongs_to :sender, class_name: :User
  belongs_to :chattable, polymorphic: true

  after_create :broadcast

  def broadcast
    message = ApplicationController.render(
      partial: 'api/chat_messages/chat_message',
      locals: { message: self }
    )
    ActionCable.server.broadcast("#{chattable_type}_#{chattable_id}", message)
  end
end
