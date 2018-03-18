
class MembershipMailer < ActionMailer::Base
    default from: "notifications@learning-exchange.herokuapp.com"

    def digest(membership)
        @membership = membership
        @user = @membership.member
        @group = @membership.group
        mail(to: @user.email, subject: 'Updates from the Learning Exchange')
    end

    private

    def should_send_digest?
        [
            @membership.active?,
            @membership.digest_active?,
            @user.recent_notifications.recent.length > 0
        ].all?
    end
end