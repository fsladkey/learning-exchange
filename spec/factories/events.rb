# == Schema Information
#
# Table name: events
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  description :text
#  group_id    :integer
#  creator_id  :integer          not null
#  state       :string
#  city        :string
#  zipcode     :string
#  latitude    :float
#  longitude   :float
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

FactoryGirl.define do
  factory :event do
    title { Faker::Music.instrument }
    description { Faker::Hipster.sentence }
    state { Faker::Address.state }
    city { Faker::Address.city }
    zipcode { Faker::Address.zip_code }
    latitude { Faker::Address.latitude }
    longitude { Faker::Address.longitude }
  end
end
