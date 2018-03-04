class StaticPagesController < ApplicationController
  before_action :redirect_if_logged_in, only: :welcome
  before_action :redirect_unless_logged_in, only: :root

  def root
  end

  def welcome
  end

  def unsubscribe
    membership = Membership.find(params[:id])
    membership.update!(digest_active: false)
    render text: "You've successfully unsubscribed. We'll miss you!"
  end

end
