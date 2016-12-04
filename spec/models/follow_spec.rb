# == Schema Information
#
# Table name: follows
#
#  id                :integer          not null, primary key
#  followed_user_id  :integer          not null
#  following_user_id :integer          not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#

require 'rails_helper'

RSpec.describe Follow, type: :model do
  describe "validations" do
    it { should validate_presence_of(:followed_user) }
    it { should validate_presence_of(:following_user) }
  end

  describe "columns" do
    it { should have_db_column(:followed_user_id) }
    it { should have_db_column(:following_user_id) }
  end

  describe "associations" do
    it { should belong_to(:followed_user) }
    it { should belong_to(:following_user) }
  end
end
