#Tags
Tag.delete_all
Tagging.delete_all
30.times do
  tag = FactoryGirl.build(:tag)
  next unless tag.valid?
  tag.save!
end
tags = Tag.all.to_a

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
  user.tags = tags.sample(3)
end
users = User.all.to_a


#Groups
puts "creating groups..."
Group.delete_all
10.times do
  group = FactoryGirl.create(:group)
  group.tags = tags.sample(3)
end
groups = Group.all.to_a

#Memberships
puts "creating memberships..."
Membership.delete_all
User.all.each do |user|
  groups.sample(2).each do |group|
    group.memberships.create!(member: user)
  end
end

#Events
puts "creating events..."
Event.delete_all
20.times do
  event = FactoryGirl.create(:event, group: groups.sample, creator: users.sample)
  event.tags = tags.sample(3)
end
events = Event.all.to_a

#Invitations
puts "creating invitations..."
Invitation.delete_all
2.times { events.sample.invitations.create(inviter: users.sample, invitee: User.first) }
events.each do |event|
  3.times do
    u1, u2 = users.sample(2)
    event.invitations.create!(inviter: u1, invitee: u2)
  end
end

#Attendances
puts "creating attendances..."
Attendance.delete_all
2.times { Attendance.create(user: User.first, event: events.sample) }
Invitation.all do |inv|
  if rand(2) == 0
    Attendance.create(user: inv.invitee, event: events.sample)
  end
end

#Direct Message
puts "creating direct messages..."
DirectMessage.delete_all
2.times do
  user = users.sample
  3.times { FactoryGirl.create(:direct_message, sender: User.first, receiver: user) }
  3.times { FactoryGirl.create(:direct_message, sender: user, receiver: User.first) }
end
2.times do
  user = users.sample
  3.times { FactoryGirl.create(:direct_message, sender: user, receiver: User.first) }
  3.times { FactoryGirl.create(:direct_message, sender: User.first, receiver: user) }
end

30.times do
  u1, u2 = users.sample(2)
  FactoryGirl.create(:direct_message, sender: u1, receiver: u2)
end
