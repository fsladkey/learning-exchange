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

require 'rails_helper'

RSpec.describe Group, type: :model do
  describe "validations" do
    it { should validate_presence_of(:name) }
  end

  describe "columns" do
    it { should have_db_column(:name) }
    it { should have_db_column(:description) }
    it { should have_db_column(:latitude) }
    it { should have_db_column(:longitude) }
  end

  describe "associations" do
    it { should have_many(:events) }
    it { should have_many(:memberships) }
    it { should have_many(:members).through(:memberships) }
    it { should have_many(:taggings) }
    it { should have_many(:tags).through(:taggings) }
  end
end
