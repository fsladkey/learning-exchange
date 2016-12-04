# == Schema Information
#
# Table name: comments
#
#  id               :integer          not null, primary key
#  body             :text
#  author_id        :integer
#  deleted          :boolean          default(FALSE)
#  commentable_type :string
#  commentable_id   :integer
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

require 'rails_helper'

RSpec.describe Comment, type: :model do
  describe "validations" do
    it { should validate_presence_of(:author) }
    it { should validate_presence_of(:body) }
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
