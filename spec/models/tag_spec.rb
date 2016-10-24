require 'rails_helper'

RSpec.describe Tag, type: :model do
  describe "validations" do
    it { should validate_presence_of(:name) }
  end

  describe "columns" do
    it { should have_db_column(:name) }
  end

  describe "associations" do
    it { should have_many(:taggings) }
    it { should have_many(:tagged_objects) }
  end
end
