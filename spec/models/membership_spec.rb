# == Schema Information
#
# Table name: memberships
#
#  id         :integer          not null, primary key
#  member_id  :integer
#  group_id   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'rails_helper'

RSpec.describe Membership, type: :model do
  describe "validations" do
    it { should validate_presence_of(:group) }
    it { should validate_presence_of(:member) }
  end

  describe "columns" do
    it { should have_db_column(:group_id) }
    it { should have_db_column(:member_id) }
  end

  describe "associations" do
    it { should belong_to(:group) }
    it { should belong_to(:member) }
  end
end
