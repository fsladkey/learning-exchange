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
    start_time { Time.now }
    end_time { DateTime.now  + 2.hours }
    address { ny_zips.sample }
  end
end
