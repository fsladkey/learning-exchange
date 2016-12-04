# == Schema Information
#
# Table name: follows
#
#  id                :integer          not null, primary key
#  followed_user_id  :integer          not null
#  following_user_id :integer          not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#

class Follow < ApplicationRecord
  validates :followed_user, :following_user, presence: true
  belongs_to :followed_user, class_name: :User
  belongs_to :following_user, class_name: :User
end
