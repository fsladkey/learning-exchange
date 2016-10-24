# == Schema Information
#
# Table name: users
#
#  id                     :integer          not null, primary key
#  email                  :string           default(""), not null
#  encrypted_password     :string           default(""), not null
#  reset_password_token   :string
#  reset_password_sent_at :datetime
#  remember_created_at    :datetime
#  sign_in_count          :integer          default(0), not null
#  current_sign_in_at     :datetime
#  last_sign_in_at        :datetime
#  current_sign_in_ip     :inet
#  last_sign_in_ip        :inet
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#  username               :string           not null
#  firstname              :string
#  lastname               :string
#  zipcode                :string
#  latitude               :float            not null
#  longitude              :float            not null
#

class User < ApplicationRecord
  include Commentable
  # include Taggable
  #validations
  validates :username, presence: true, uniqueness: true
  validates :zipcode, :latitude, :longitude, presence: true, length: { is: 5 }

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable,
         :validatable, :omniauthable

  #associations
  has_many :memberships, foreign_key: :member_id
  has_many :groups, through: :memberships, source: :group
  has_many :created_events, class_name: :Event, foreign_key: :creator_id

  has_many(
    :received_invitations,
    class_name: :Invitation,
    foreign_key: :invitee_id
  )

  has_many(
    :sent_invitations,
    class_name: :Invitation,
    foreign_key: :inviter_id
  )

  has_many(
    :events_to_attend,
    -> { where(status: "accepted") },
    through: :received_invitations,
    source: :event
  )

end
