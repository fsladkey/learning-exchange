# ### Groups Controller
# `GET /api/groups/`
# `GET /api/session/groups/`
# `POST /api/groups/`
# `PATCH /api/groups/`
# `DELETE /api/groups/`

class Api::GroupsController < Api::ApiController

  def index
    @groups = Group.within(10, origin: current_user)
  end

  def current_user_groups
    @groups = current_user.groups
    render :index
  end

  def create
    @group = Group.new(group_params)
    if @group.save
      render :show
    else
      render json: group.errors, status: 422
    end
  end

  def update
    if group.update(group_params)
      render :show
    else
      render json: group.errors, status: 422
    end
  end

  def destroy
    group.destroy
    render :show
  end

  private

  def group
    @group ||= Group.find(params[:id])
  end

  def group_params
    params.require(:group).permit(:name, :desciption, :zipcode)
  end

end
