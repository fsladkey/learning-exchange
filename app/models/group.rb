# == Schema Information
#
# Table name: groups
#
#  id          :integer          not null, primary key
#  name        :string           not null
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Group < ApplicationRecord
  include Taggable
  validates :name, presence: true

  has_many :events
  has_many :memberships
  has_many :members, through: :memberships, source: :member
end
