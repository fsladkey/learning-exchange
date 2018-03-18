# == Schema Information
#
# Table name: notifications
#
#  id              :integer          not null, primary key
#  user_id         :integer          not null
#  notifiable_id   :integer          not null
#  notifiable_type :string           not null
#  seen            :boolean          default(FALSE)
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Notification < ApplicationRecord
  validates :user, :notifiable, presence: true
  belongs_to :user
  belongs_to :notifiable, polymorphic: true
  scope :recent, -> { where(created_at: 1.day.ago..Time.current) }

  def url
    # should try to use notifiable.notifiable_url instead
    case notifiable_type
    when "DirectMessage"
      "/messages/#{notifiable.sender.username}"
    when "Invitation"
      "/events/#{notifiable.event_id}"
    when "Follow"
      "/profile/#{notifiable.follower.username}"
    when "Event"
      "/events/#{notifiable.id}"
    end
  end

  def notification_header
    notifiable.notification_header
  end

  def notification_message
    notifiable.notification_message
  end
end
