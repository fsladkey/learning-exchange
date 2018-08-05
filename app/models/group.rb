# == Schema Information
#
# Table name: groups
#
#  id           :integer          not null, primary key
#  name         :string           not null
#  description  :text
#  zipcode      :string           not null
#  latitude     :float
#  longitude    :float
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  chat_enabled :boolean          default(FALSE)
#

class Group < ApplicationRecord
  include Taggable
  include Geocodable
  include Searchable
  include Chattable
  validates :name, :zipcode, presence: true

  has_many :events
  has_many :memberships
  has_many :active_memberships, -> { where(active: true) }, class_name: :Membership
  has_many :digest_memberships, -> { where(digest_active: true) }, class_name: :Membership
  has_many :members, through: :memberships, source: :member
  has_many :active_members, through: :active_memberships, source: :member

  def self.fields_to_query
    [:name, :description]
  end

  def add_member(user)
    memberships.create(member: user)
  end

  def activate_digests
    memberships.update_all(digest_active: true)
  end

  def archive_messages!
    chat_messages.update_all(archived_at: Time.now.utc)
  end

end
