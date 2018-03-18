namespace :mail do
  desc "Send daily digest to all active group members"
  task :send_digest => :environment do
    Group.all.each do |group|
      group.digest_memberships.each do |membership|
        MembershipMailer.digest(membership).deliver
      end
    end
  end
end
