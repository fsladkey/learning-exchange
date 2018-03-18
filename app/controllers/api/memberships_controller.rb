class Api::MembershipsController < Api::ApiController
  before_action :ensure_has_edit_permissions

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
    params.require(:membership).permit(:active, :digest_active)
  end

  def ensure_has_edit_permissions
    if !(current_user.admin?)
      render json: ["Not authorized"], status: 401
    end
  end

end
