#Users
puts "creating users..."
User.destroy_all
FactoryGirl.create(:user, username: "fsladkey", email: "fsladkey@gmail.com")
50.times do
  FactoryGirl.create(:user)
end

#Groups
puts "creating groups..."
Group.destroy_all
10.times do
  FactoryGirl.create(:group)
end

#Events
puts "creating events..."
Event.destroy_all
group_ids = Group.pluck(:id)
user_ids = User.pluck(:id)
20.times do
  FactoryGirl.create(:event, group_id: group_ids.sample, creator_id: user_ids.sample)
end
