class Event < ApplicationRecord
  validates :creator, :title, :city, :state,
            :zipcode, :latitude, :longitude, presence: true

  belongs_to :group
  belongs_to :creator, class_name: :User

  has_many :invitations
  has_many :attendances

  has_many :invited_users, through: :invitations, source: :invitee
  has_many(
    :attending_users,
    through: :attendances,
    source: :user
  )

end
