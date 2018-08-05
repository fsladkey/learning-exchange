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
#  archived_at    :datetime
#

class ChatMessage < ApplicationRecord
  validates :sender, :chattable, presence: true
  belongs_to :sender, class_name: :User
  belongs_to :chattable, polymorphic: true

  after_create { ChatMessageBroadcastJob.perform_later self }
  scope :recent, -> { where(created_at: 1.day.ago..Time.current) }
  scope :active, -> { where(archived_at: nil)}
end
