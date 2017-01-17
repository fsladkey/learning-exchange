class Api::UsersController < Api::ApiController

  def index
    @users = User.within(10, origin: current_user)
  end

  def show
    @user = User.find_by(username: params[:username])
    if @user
      render :show
    else
      render json: ["User not found"], status: 404
    end
  end

  def update
    if current_user.update(user_params)
      @user = current_user
      render :show
    else
      render json: current_user.errors, status: 422
    end
  end

  def destroy
    current_user.destroy
    @user = current_user
    render :show
  end

  private
  def user_params
    params.require(:user).permit(
      :email,
      :username,
      :firstname,
      :lastname,
      :zipcode
    )
  end

end
