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
  include Taggable
  # validations
  validates :username, presence: true, uniqueness: true
  validates :zipcode, presence: true, length: { is: 5 }
  validates :latitude, :longitude, presence: true

  devise(
    :database_authenticatable,
    :registerable,
    :recoverable,
    :rememberable,
    :trackable,
    :validatable,
    :omniauthable
  )

  #associations
  has_many :memberships, foreign_key: :member_id
  has_many :notifications
  has_many :groups, through: :memberships, source: :group
  has_many :created_events, class_name: :Event, foreign_key: :creator_id
  has_many :in_follows, class_name: :Follow, foreign_key: :followed_user_id
  has_many :out_follows, class_name: :Follow, foreign_key: :following_user_id
  has_many :followers, through: :in_follows, source: :following_user
  has_many :followed_users, through: :out_follows, source: :followed_user

  has_many(
    :sent_messages,
    class_name: :DirectMessage,
    foreign_key: :sender_id
  )

  has_many(
    :received_messages,
    class_name: :DirectMessage,
    foreign_key: :receiver_id
  )

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
    -> { where(status: :accepted) },
    through: :received_invitations,
    source: :event
  )

  def fullname
    "#{firstname} #{lastname}"
  end

end
