class Api::MembershipsController < Api::ApiController

  def update
    if membership.update(membership_params)
      render :show
    else
      render json: membership.errors, status: 422
    end
  end

  private

  def membership
    @membership ||= Membership.find(params[:id])
  end

  def membership_params
    params.require(:membership).permit(:active)
  end

end
