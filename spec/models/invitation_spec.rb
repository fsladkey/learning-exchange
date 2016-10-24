require 'rails_helper'

RSpec.describe Invitation, type: :model do
  describe "validations" do
    it { should validate_presence_of(:event) }
    it { should validate_presence_of(:inviter) }
    it { should validate_presence_of(:invitee) }
  end

  describe "columns" do
    it { should have_db_column(:event_id) }
    it { should have_db_column(:inviter_id) }
    it { should have_db_column(:invitee_id) }
    it { should have_db_column(:event_id) }
  end

  describe "associations" do
    it { should belong_to(:event) }
    it { should belong_to(:inviter) }
    it { should belong_to(:invitee) }
  end
end
