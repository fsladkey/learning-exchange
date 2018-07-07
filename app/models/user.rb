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
#  provider               :string
#  uid                    :string
#  avatar_file_name       :string
#  avatar_content_type    :string
#  avatar_file_size       :integer
#  avatar_updated_at      :datetime
#  middlename             :string
#  bio                    :text
#

class User < ApplicationRecord
  include Commentable
  include Taggable
  include Searchable
  include Geocodable

  # validations
  validates :username, :email, presence: true, uniqueness: true
  validates :zipcode, presence: true, length: { is: 5 }, numericality: true

  devise(
    :database_authenticatable,
    :registerable,
    :recoverable,
    :rememberable,
    :trackable,
    :validatable,
    :omniauthable,
    omniauth_providers: [:facebook, :google_oauth2]
  )

  #associations
  has_many(
    :memberships,
    -> { where(active: true) },
    foreign_key: :member_id
  )
  has_many :attendances, inverse_of: :user
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
    :unseen_messages,
    -> { where(seen: false) },
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
    :events_invited_to,
    through: :invitations,
    source: :event
  )

  has_many(
    :events_to_attend,
    through: :attendances,
    source: :event
  )

  has_many(
    :authored_comments,
    class_name: "Comment",
    foreign_key: :author_id,
  )

  has_attached_file :avatar, styles: { medium: "200x200#", thumb: "50x50#" }, default_url: ""
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\z/
  after_initialize :ensure_username

  def self.fields_to_query
    [:username, :firstname, :lastname, :email]
  end

  def self.from_omniauth(auth)
    user = find_by(provider: auth.provider, uid: auth.uid)
    return user if user
    user = find_by(email: auth.info.email)
    return combine_omniauth(user, auth) if user

    create do |user|
      user.email = auth.info.email
      user.password = Devise.friendly_token[0,20]
      user.zipcode = "12345"
      user.username = auth.info.name.gsub(" ", "").underscore
      user.firstname = auth.info.first_name || auth.info.name.split(' ').first
      user.lastname = auth.info.last_name || auth.info.name.split(' ').last
      user.avatar = process_uri(auth.info.image)
    end
  end

  def self.combine_omniauth(user, auth)
    # TODO: Consult about security
    user.tap do |user|
      user.uid = auth.uid
      user.provider = auth.provider
      user.email ||= auth.info.email
      user.firstname ||= auth.info.first_name || auth.info.name.split(' ').first
      user.lastname ||= auth.info.last_name || auth.info.name.split(' ').last
      user.avatar ||= process_uri(auth.info.image)
    end
    user.save
    user
  end

  def attend(event)
    events_to_attend << event 
  end

  def accept_invitation(invitation)
    attend(invitation.event)
    invitation.destroy
  end

  def ensure_username
    self.username ||= begin
      email_handle = email.split("@").first
      email_handle = "#{email_handle}#{id}" if User.exists?(username: email_handle)
      email_handle
    end
  end

  def tag_names=(tags)
    self.tags = tags.map { |tag| Tag.find_or_create_by(name: tag.downcase) }
  end

  def fullname
    middlename ? "#{firstname} #{middlename} #{lastname}" : "#{firstname} #{lastname}"
  end

  def all_messages
    DirectMessage.where("sender_id = :id OR receiver_id = :id", id: id)
  end

  def conversations
    Conversation.where(user_1_id: id).or(Conversation.where(user_2_id: id)).includes(:direct_messages)
  end

  def conversation_with(other_user)
    Conversation.find_or_create_by_users(self, other_user)
  end

  def invite(user, event)
    sent_invitations.create(invitee: user, event: event)
  end

  def update_password(password, password_confirmation)
    if !password.blank? && password == password_confirmation
      self.password = password
    end
  end

  def is_member?(group)
    memberships.where(group_id: group.id).exists?
  end

  def recent_notifications_for_group(group_id)
    notifications.recent.select do |notification|
      notification.notifiable.try(:group_id) == group_id ||
      notification.notifiable.try(:event).try(:group_id) == group_id
    end
  end

  private

  def self.process_uri(uri)
    avatar_url = URI.parse(uri)
    avatar_url.scheme = 'https'
    avatar_url
  end

end
