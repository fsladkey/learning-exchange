# == Schema Information
#
# Table name: groups
#
#  id          :integer          not null, primary key
#  name        :string           not null
#  description :text
#  zipcode     :string           not null
#  latitude    :float
#  longitude   :float
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Group < ApplicationRecord
  include Taggable
  include Geocodable
  include Searchable
  validates :name, :zipcode, presence: true

  has_many :events
  has_many :memberships
  has_many :members, through: :memberships, source: :member

  def self.fields_to_query
    [:name, :description]
  end
end
