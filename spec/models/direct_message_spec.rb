# == Schema Information
#
# Table name: direct_messages
#
#  id              :integer          not null, primary key
#  sender_id       :integer          not null
#  receiver_id     :integer          not null
#  body            :text             not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  seen            :boolean          default(FALSE)
#  conversation_id :integer
#

require 'rails_helper'

RSpec.describe DirectMessage, type: :model do
  subject do
    sender = create(:user)
    receiver = create(:user)
    create(:direct_message, sender: sender, receiver: receiver)
  end
  describe "validations" do
    it { should validate_presence_of(:sender) }
    it { should validate_presence_of(:receiver) }
  end

  describe "columns" do
    it { should have_db_column(:sender_id) }
    it { should have_db_column(:receiver_id) }
  end

  describe "associations" do
    it { should belong_to(:sender) }
    it { should belong_to(:receiver) }
  end
end
