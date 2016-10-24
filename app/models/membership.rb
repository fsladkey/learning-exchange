# == Schema Information
#
# Table name: memberships
#
#  id         :integer          not null, primary key
#  member_id  :integer
#  group_id   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Membership < ApplicationRecord
  validates :member, :group, presence: true

  belongs_to :group
  belongs_to :member, class_name: :User
end
