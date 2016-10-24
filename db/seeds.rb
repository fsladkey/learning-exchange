#Users
User.destroy_all
FactoryGirl.create(:user, username: "fsladkey", email: "fsladkey@gmail.com")
50.times do
  FactoryGirl.create(:user)
end

#Groups
User.destroy_all
10.times do
  FactoryGirl.create(:group)
end

#Groups
User.destroy_all
20.times do
  FactoryGirl.create(:event)
end
