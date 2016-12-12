# == Schema Information
#
# Table name: groups
#
#  id          :integer          not null, primary key
#  name        :string           not null
#  description :text
#  zipcode     :string           not null
#  latitude    :float
#  longitude   :float
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
ny_zips = ["10001", "11215", "112137"]

FactoryGirl.define do
  factory :group do
    name { Faker::Team.creature }
    description { Faker::Hipster.sentence }
    zipcode { ny_zips.sample }
  end
end
