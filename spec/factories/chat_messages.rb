# == Schema Information
#
# Table name: chat_messages
#
#  id             :integer          not null, primary key
#  sender_id      :integer          not null
#  chattable_id   :integer          not null
#  chattable_type :string           not null
#  body           :string           not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  archived_at    :datetime
#

FactoryGirl.define do
  factory :chat_message do
    body { Faker::Hipster.sentance }
  end
end
