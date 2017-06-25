# == Schema Information
#
# Table name: events
#
#  id          :integer          not null, primary key
#  name        :string           not null
#  description :text
#  group_id    :integer
#  creator_id  :integer          not null
#  address     :string
#  latitude    :float
#  longitude   :float
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Event < ApplicationRecord
  include Taggable
  include Geocodable
  include Searchable
  validates :creator, :group, :name, :address, :start, :end, presence: true

  before_validation :geocode
  geocoded_by :address

  belongs_to :group, optional: true
  belongs_to :creator, class_name: :User

  has_many :invitations, inverse_of: :event
  has_many :attendances, inverse_of: :event, dependent: :destroy

  has_many :invited_users, through: :invitations, source: :invitee
  has_many(
    :attending_users,
    through: :attendances,
    source: :user
  )

  after_create :invite_group_members, :attend_by_creator
  after_create :attend_by_creator

  def self.fields_to_query
    [:name, :description]
  end

  def invite_group_members
    invited_users << group.members
  end

  def attend_by_creator
    attending_users << creator
  end

  def locator
    :address
  end

end
