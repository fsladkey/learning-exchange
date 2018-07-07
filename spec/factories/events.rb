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
#  start_time  :datetime
#  end_time    :datetime
#

ny_zips = ["10001", "11215", "12137"]

FactoryGirl.define do
  factory :event do
    name { Faker::Music.instrument }
    description { Faker::Hipster.sentence }
    start_time { DateTime.current }
    end_time { DateTime.current  + 2.hours }
    address { ny_zips.sample }
    creator { FactoryGirl.create(:user) }
  end
end
