class Api::SessionsController < Api::ApiController

  def show
    @user = current_user
    render "api/users/show.json"
  end
end
