# == Schema Information
#
# Table name: chat_messages
#
#  id             :integer          not null, primary key
#  sender_id      :integer          not null
#  chattable_id   :integer          not null
#  chattable_type :string           not null
#  body           :string           not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  archived_at    :datetime
#

require 'rails_helper'

RSpec.describe ChatMessage, type: :model do
  describe "validations" do
    it { should validate_presence_of(:sender) }
    it { should validate_presence_of(:chattable) }
  end

  describe "columns" do
    it { should have_db_column(:sender_id) }
    it { should have_db_column(:chattable_id) }
    it { should have_db_column(:chattable_type) }
  end

  describe "associations" do
    it { should belong_to(:sender) }
    it { should belong_to(:chattable) }
  end
end
