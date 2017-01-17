class Users::OmniauthCallbacksController < Devise::OmniauthCallbacksController
  def oath_callback
    @user = User.from_omniauth(request.env["omniauth.auth"])
    
    if @user.persisted?
      sign_in_and_redirect @user, :event => :authentication
    else
      session["devise.facebook_data"] = request.env["omniauth.auth"].except("extra")
      redirect_to welcome_url
    end
  end

  def google_oauth2
    oath_callback
  end

  def facebook
    oath_callback
  end

  def failure
    redirect_to root_path
  end
end
