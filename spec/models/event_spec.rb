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

require 'rails_helper'

RSpec.describe Event, type: :model do
  describe "validations" do
    it { should validate_presence_of(:name) }
    it { should validate_presence_of(:creator) }
    it { should validate_presence_of(:address) }
  end

  describe "columns" do
    it { should have_db_column(:name) }
    it { should have_db_column(:description) }
    it { should have_db_column(:group_id) }
    it { should have_db_column(:creator_id) }
    it { should have_db_column(:address) }
    it { should have_db_column(:latitude) }
    it { should have_db_column(:longitude) }
  end

  describe "associations" do
    it { should belong_to(:group) }
    it { should belong_to(:creator) }
    it { should have_many(:invitations) }
    it { should have_many(:invited_users) }
    it { should have_many(:attendances) }
    it { should have_many(:attending_users) }
    it { should have_many(:taggings) }
    it { should have_many(:tags).through(:taggings) }
  end
end
