# == Schema Information
#
# Table name: notifications
#
#  id              :integer          not null, primary key
#  user_id         :integer          not null
#  notifiable_id   :integer          not null
#  notifiable_type :string           not null
#  seen            :boolean          default(FALSE)
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

require 'rails_helper'

RSpec.describe Notification, type: :model do
  describe "validations" do
    it { should validate_presence_of(:user) }
    it { should validate_presence_of(:notifiable) }
  end

  describe "columns" do
    it { should have_db_column(:user_id) }
    it { should have_db_column(:seen) }
    it { should have_db_column(:notifiable_id) }
    it { should have_db_column(:notifiable_type) }
  end

  describe "associations" do
    it { should belong_to(:user) }
    it { should belong_to(:notifiable) }
  end
end
