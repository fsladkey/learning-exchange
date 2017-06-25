# == Schema Information
#
# Table name: attendances
#
#  id         :integer          not null, primary key
#  event_id   :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Attendance < ApplicationRecord
  validates :user, :event, presence: :true
  validates :event_id, uniqueness: { scope: :user_id }

  belongs_to :user, inverse_of: :attendances
  belongs_to :event, inverse_of: :attendances

  after_create :destroy_invitation

  def destroy_invitation
    invitation = user.received_invitations.find_by(event_id: event_id)
    invitation && invitation.destroy
  end
end
