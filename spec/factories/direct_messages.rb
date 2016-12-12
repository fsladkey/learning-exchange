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

FactoryGirl.define do
  factory :direct_message do
    body { Faker::Hipster.sentence }
  end
end
