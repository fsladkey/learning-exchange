require 'rails_helper'

RSpec.describe Comment, type: :model do
  describe "validations" do
    it { should validate_presence_of(:author) }
    it { should validate_presence_of(:body) }
    it { should validate_presence_of(:commentable) }
  end

  describe "columns" do
    it { should have_db_column(:body) }
    it { should have_db_column(:deleted) }
    it { should have_db_column(:commentable_id) }
    it { should have_db_column(:commentable_type) }
  end

  describe "associations" do
    it { should belong_to(:author) }
    it { should belong_to(:commentable) }
  end
end
