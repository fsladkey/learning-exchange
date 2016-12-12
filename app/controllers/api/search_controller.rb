class Api::SearchController < Api::ApiController
  def index
    @events = Event.search(params, current_user)
    @groups = Group.search(params, current_user)
    @users = User.search(params, current_user)
  end
end
