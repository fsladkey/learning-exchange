# == Schema Information
#
# Table name: events
#
#  id          :integer          not null, primary key
#  name        :string           not null
#  description :text
#  group_id    :integer
#  creator_id  :integer          not null
#  address     :string
#  latitude    :float
#  longitude   :float
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
ny_zips = ["10001", "11215", "12137"]

FactoryGirl.define do
  factory :event do
    name { Faker::Music.instrument }
    description { Faker::Hipster.sentence }
    date { rand(10).days.from_now }
    address { ny_zips.sample }
  end
end
