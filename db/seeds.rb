#Users
puts "creating users..."
User.delete_all
FactoryGirl.create(
  :user,
  firstname: "Fred",
  lastname: "Sladkey",
  username: "fsladkey",
  email: "fsladkey@gmail.com",
  password: "starwars",
  zipcode: '11215'
)
50.times do
  user = FactoryGirl.build(:user)
  next unless user.valid?
  user.save!
end
user_ids = User.pluck(:id)

30.times do
  tag = FactoryGirl.build(:tag)
  next unless tag.valid?
  tag.save!
end
tag_ids = Tag.pluck(:id)

#Groups
puts "creating groups..."
Group.delete_all
10.times do
  FactoryGirl.create(:group)
end
group_ids = Group.pluck(:id)

#Memberships
puts "creating memberships..."
Membership.delete_all
User.all.each do |user|
  group_ids.sample(2).each do |group_id|
    Membership.create!(member_id: user.id, group_id: group_id)
  end
end

#Events
puts "creating events..."
Event.delete_all
20.times do
  FactoryGirl.create(:event, group_id: group_ids.sample, creator_id: user_ids.sample)
end
event_ids = Event.pluck(:id)

#Invitations
puts "creating invitations..."
Invitation.delete_all
20.times do
  id1, id2 = user_ids.sample(2)
  Invitation.create!(inviter_id: id1, invitee_id: id2, event_id: event_ids.sample)
end

#Attendances
puts "creating attendances..."
Attendance.delete_all
20.times do
  Attendance.create!(user_id: user_ids.sample, event_id: event_ids.sample)
end

#Direct Message
puts "creating direct messages..."
DirectMessage.delete_all
30.times do
  ids = user_ids.sample(2)
  FactoryGirl.create(:direct_message, sender_id: ids.first, receiver_id: ids.last)
end
