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
  validates :creator, :name, :address, presence: true

  before_validation :geocode
  geocoded_by :address

  belongs_to :group, optional: true
  belongs_to :creator, class_name: :User

  has_many :invitations
  has_many :attendances

  has_many :invited_users, through: :invitations, source: :invitee
  has_many(
    :attending_users,
    through: :attendances,
    source: :user
  )

  def self.fields_to_query
    [:name]
  end

  def locator
    :address
  end

end
