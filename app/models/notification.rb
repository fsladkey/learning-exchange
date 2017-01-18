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

  def url
    case notifiable_type
    when "DirectMessage"
      "/messages/#{notifiable.sender.username}"
    when "Invitation"
      "/events/#{notifiable.event_id}"
    when "Follow"
      "/profile/#{notifiable.follower.username}"
    end
  end
end
