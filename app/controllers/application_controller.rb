class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  private

  def redirect_unless_logged_in
    # Should track the original destination
    redirect_to welcome_url unless user_signed_in?
  end

  def redirect_if_logged_in
    redirect_to root_url if user_signed_in?
  end

end
