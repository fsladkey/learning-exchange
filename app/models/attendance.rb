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

  belongs_to :user
  belongs_to :event
end
