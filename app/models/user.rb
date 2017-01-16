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
#  latitude               :float
#  longitude              :float
#

class User < ApplicationRecord
  include Commentable
  include Taggable
  include Searchable
  include Geocodable

  # validations
  validates :username, presence: true, uniqueness: true
  validates :zipcode, presence: true, length: { is: 5 }, numericality: true

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
  has_many(
    :recent_notifications,
    -> { order(created_at: :desc).limit(10) },
    foreign_key: :user_id,
    class_name: "Notification"
  )
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
    :chat_messages,
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
    through: :received_invitations,
    source: :event
  )

  has_many(
    :authored_comments,
    class_name: "Comment",
    foreign_key: :author_id,
  )

  def self.fields_to_query
    [:username, :firstname, :lastname, :email]
  end

  def fullname
    "#{firstname} #{lastname}"
  end


  def all_messages
    DirectMessage.where("sender_id = :id OR receiver_id = :id", id: id)
  end

  def conversations
    Conversation.where(user_1_id: id).or(Conversation.where(user_2_id: id)).includes(:direct_messages)
  end

  def conversation_with(other_user)
    c = conversations.where(user_1_id: other_user.id).or(conversations.where(user_2_id: other_user.id))
    c.empty? ? Conversation.create!(user_1_id: id, user_2_id: other_user.id) : c.first
  end

end
