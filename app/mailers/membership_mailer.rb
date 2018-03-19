
class MembershipMailer < ActionMailer::Base
    default from: "notifications@learning-exchange.herokuapp.com"

    def digest(membership)
        @membership = membership
        @user = @membership.member
        @group = @membership.group
        mail(to: @user.email, subject: 'Updates from the Learning Exchange')
    end

end