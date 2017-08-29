# == Schema Information
#
# Table name: follows
#
#  id                :integer          not null, primary key
#  followed_user_id  :integer          not null
#  following_user_id :integer          not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#

class Follow < ApplicationRecord
  include Notifiable
  validates :followed_user, :following_user, presence: true
  belongs_to :followed_user, class_name: :User
  belongs_to :following_user, class_name: :User

  def user_to_notify
    followed_user
  end

  def notification_header
    "New Follower"
  end

  def notification_message
    "#{following_usr.fullname} is now following you."
  end
end
