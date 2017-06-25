#Attendances
puts "cleaning attendances..."
Attendance.delete_all

#Notifications
puts "cleaning notifications..."
Notification.delete_all

#Invitations
puts "cleaning invitations..."
Invitation.delete_all

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
fred = User.create(
  firstname: "Fred",
  lastname: "Sladkey",
  username: "fsladkey",
  email: "fsladkey@gmail.com",
  password: "starwars",
  zipcode: '11215'
)
sophia = User.create!(
  firstname: "Sophia",
  lastname: "Sayigh",
  email: "sophia@sayigh.net",
  password: "changeme",
  zipcode: '02474'
)
nadia = User.create!(
  firstname: "Nadia",
  lastname: "Sladkey",
  email: "nsladkey@gmail.com",
  password: "changeme",
  zipcode: '02474'
)
milva = User.create!(
  firstname: "Milva",
  lastname: "McDonald",
  email: "milva@shirim.com",
  password: "changeme",
  zipcode: '02155'
)
tracy = User.create!(
  firstname: "Tracy",
  middlename: "Barsamian",
  lastname: "Ventola",
  email: "tracybarsamian@hotmail.com",
  password: "changeme",
  zipcode: '02474'
)
users = User.all.to_a


#Groups
puts "creating groups..."
Group.delete_all
ahem = Group.create(name: "AHEM", description: "The very first group!", zipcode: "02474")
10.times do
  group = FactoryGirl.create(:group)
  group.tags = tags.sample(3)
end
groups = Group.all.to_a

#Memberships
puts "creating memberships..."
Membership.delete_all
users.each { |u| ahem.add_member(u) }

#Events
puts "creating events..."
Event.delete_all
event_1 = ahem.events.create!(
  name: "Kick Butt", 
  description: "gonna kick some butt", 
  address: "24 avon pl arlington MA", 
  start: 5.days.from_now,
  end: 5.days.from_now  + 2.hours,
  creator: fred
)
event_2 = ahem.events.create!(
  name: "Chew Bubblegum", 
  description: "gonna chew some bubblegum", 
  address: "24 avon pl arlington MA", 
  start: 3.days.from_now,
  end: 3.days.from_now + 2.hours,
  creator: fred
)
events = Event.all.to_a

#Direct Message
puts "creating direct messages..."
DirectMessage.delete_all
Conversation.delete_all

# 30.times do
#   u1, u2 = users.sample(2)
#   FactoryGirl.create(:direct_message, sender: u1, receiver: u2)
# end

# Guest User
# guest = FactoryGirl.create(
#   :user,
#   firstname: "Guest",
#   lastname: "User",
#   username: "guest",
#   email: "guest@example.com",
#   password: "starwars",
#   zipcode: '11215'
# )