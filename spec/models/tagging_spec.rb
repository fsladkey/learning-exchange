# == Schema Information
#
# Table name: taggings
#
#  id            :integer          not null, primary key
#  tag_id        :integer          not null
#  taggable_type :string
#  taggable_id   :integer
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

require 'rails_helper'

RSpec.describe Tagging, type: :model do
  describe "validations" do
    it { should validate_presence_of(:tag) }
  end

  describe "columns" do
    it { should have_db_column(:tag_id) }
    it { should have_db_column(:taggable_id) }
    it { should have_db_column(:taggable_type) }
  end

  describe "associations" do
    it { should belong_to(:tag) }
    it { should belong_to(:taggable) }
  end
end
