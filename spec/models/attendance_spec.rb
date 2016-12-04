# == Schema Information
#
# Table name: attendances
#
#  id         :integer          not null, primary key
#  event_id   :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'rails_helper'

RSpec.describe Attendance, type: :model do
  describe "validations" do
    it { should validate_presence_of(:user) }
    it { should validate_presence_of(:event) }
  end

  describe "columns" do
    it { should have_db_column(:user_id) }
    it { should have_db_column(:event_id) }
  end

  describe "associations" do
    it { should belong_to(:event) }
    it { should belong_to(:user) }
  end
end
