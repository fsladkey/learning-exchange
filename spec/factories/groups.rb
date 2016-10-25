# == Schema Information
#
# Table name: groups
#
#  id          :integer          not null, primary key
#  name        :string           not null
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

FactoryGirl.define do
  factory :group do
    name { Faker::Team.creature }
    description { Faker::Hipster.sentence }
  end
end
