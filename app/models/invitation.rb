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
  validates :event, :inviter, :invitee, presence: true

  belongs_to :event
  belongs_to :inviter, class_name: :User
  belongs_to :invitee, class_name: :User

  def user_to_notify
    invitee
  end
end
