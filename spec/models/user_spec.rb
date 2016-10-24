require 'rails_helper'

RSpec.describe User, type: :model do
  it { should have_db_column(:email) }
  it { should have_db_column(:username) }
  it { should have_db_column(:firstname) }
  it { should have_db_column(:lastname) }
  it { should have_db_column(:session_token) }
  it { should have_db_column(:encrypted_password) }
  it { should have_db_column(:reset_password_token) }
  it { should have_db_column(:reset_password_sent_at) }
  it { should have_db_column(:remember_created_at) }
  it { should have_db_column(:sign_in_count) }
  it { should have_db_column(:current_sign_in_at) }
  it { should have_db_column(:last_sign_in_at) }
  it { should have_db_column(:current_sign_in_ip) }
  it { should have_db_column(:last_sign_in_ip) }
  it { should have_db_column(:zipcode) }
  it { should have_db_column(:latitude) }
  it { should have_db_column(:longitude) }
  it { should have_db_column(:created_at) }
  it { should have_db_column(:updated_at) }

  it { should validate_presence_of(:username) }
  it { should validate_presence_of(:email) }
  it { should validate_presence_of(:session_token) }
  it { should validate_presence_of(:zipcode) }
  it { should validate_length_of(:zipcode) }
  it { should validate_presence_of(:latitude) }
  it { should validate_presence_of(:longitude) }

  it { should have_many(:comments) }
  it { should have_many(:memberships) }
  it { should have_many(:groups) }
  it { should have_many(:created_events) }
  it { should have_many(:events_to_attend) }
  it { should have_many(:taggings) }
  it { should have_many(:tags) }
end
