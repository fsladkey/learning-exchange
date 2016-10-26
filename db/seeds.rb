#Users
puts "creating users..."
User.destroy_all
FactoryGirl.create(:user, username: "fsladkey", email: "fsladkey@gmail.com")
50.times do
  FactoryGirl.create(:user)
end
user_ids = User.pluck(:id)

#Groups
puts "creating groups..."
Group.destroy_all
10.times do
  FactoryGirl.create(:group)
end
group_ids = Group.pluck(:id)

#Memberships
puts "creating memberships..."
Membership.destroy_all
User.all.each do |user|
    group_ids.sample(2).each do |group_id|
      Membership.create!(member_id: user.id, group_id: group_id)
    end
end

#Events
puts "creating events..."
Event.destroy_all
20.times do
  FactoryGirl.create(:event, group_id: group_ids.sample, creator_id: user_ids.sample)
end
event_ids = Event.pluck(:id)

#Invitations
puts "creating invitations..."
Invitation.destroy_all
20.times do
  id1, id2 = user_ids.sample(2)
  Invitation.create!(inviter_id: id1, invitee_id: id2, event_id: event_ids.sample)
end

#Attendances
puts "creating attendances..."
Attendance.destroy_all
20.times do
  Attendance.create!(user_id: user_ids.sample, event_id: event_ids.sample)
end
