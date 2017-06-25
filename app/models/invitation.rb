# == Schema Information
#
# Table name: invitations
#
#  id         :integer          not null, primary key
#  event_id   :integer
#  inviter_id :integer
#  invitee_id :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Invitation < ApplicationRecord
  include Notifiable

  validates :event, :invitee, presence: true

  belongs_to :event, inverse_of: :invitations
  belongs_to :inviter, class_name: :User, optional: true
  belongs_to :invitee, class_name: :User

  def user_to_notify
    invitee
  end

  def notification_message
    inviter ?
      "#{inviter.fullname} has invited you to #{event.name}." :
      "You've been invited to #{event.name} by #{event.group.name}."
  end
end
