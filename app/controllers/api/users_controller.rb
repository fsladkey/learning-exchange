class Api::UsersController < Api::ApiController
  before_action :ensure_has_edit_permissions, only: [:update, :destroy]
  before_action :ensure_is_admin, only: [:create]

  def index
    @users = User.within(10, origin: current_user)
  end

  def show
    @user = User.includes(:tags, attendances: :event, notifications: :notifiable).find_by(username: params[:username])
    if @user
      render :show
    else
      render json: ["User not found"], status: 404
    end
  end

  def create
    @user = User.new(user_params)
    @user.update_password(params[:user][:password], params[:user][:password_confirmation])
    if @user.save
      group_id = params[:user][:group_id]
      Group.find(group_id).add_member(@user) if group_id
      render :show
    else
      render json: @user.errors, status: 422
    end
  end

  def update
    @user = User.find(params[:id])
    @user.update_password(params[:user][:password], params[:user][:password_confirmation])
    @user.assign_attributes(user_params)
    if @user.save
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
      :zipcode,
      tag_names: []
    )
  end

  def password_params
    params.require(:user).permit(:password, :password_confirmation)
  end

  def ensure_has_edit_permissions
    if !(current_user.admin? || params[:id].to_i == current_user.id)
      render json: ["Not authorized"], status: 401
    end
  end

end
