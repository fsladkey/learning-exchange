class Api::UsersController < Api::ApiController

  def show
    @user = User.find(params[:id])
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
      :zipcode,
      :latitude,
      :longitude
    )
  end

end
