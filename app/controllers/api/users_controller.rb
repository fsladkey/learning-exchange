class Api::UsersController < Api::ApiController
  before_action :ensure_has_edit_permissions, only: [:update, :destroy]

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
    @user = User.find(params[:id])
    if @user.update(user_params)
      render :show
    else
      render json: @user.errors, status: 422
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
      :bio,
      :username,
      :firstname,
      :middlename,
      :lastname,
      :zipcode
    )
  end

  def ensure_has_edit_permissions
    user_params[:id] == current_user.id
  end

end
