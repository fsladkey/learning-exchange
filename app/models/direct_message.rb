# == Schema Information
#
# Table name: direct_messages
#
#  id          :integer          not null, primary key
#  sender_id   :integer          not null
#  receiver_id :integer          not null
#  body        :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class DirectMessage < ApplicationRecord
  include Notifiable
  validates :sender, :receiver, presence: true
  belongs_to :sender, class_name: :User
  belongs_to :receiver, class_name: :User

  def user_to_notify
    receiver
  end
end
