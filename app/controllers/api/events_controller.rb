class Api::EventsController < Api::ApiController

  def index
    @events = Event.within(10, origin: current_user)
  end

  def current_user_events
    @events = current_user.events_to_attend
    render :index
  end

  def create
    @event = current_user.created_events.new(event_params)
    if @event.save
      render :show
    else
      render json: event.errors, status: 422
    end
  end

  def update
    if event.update(event_params)
      render :show
    else
      render json: event.errors, status: 422
    end
  end

  def destroy
    event.destroy
    render :show
  end

  private

  def event
    @event ||= current_user.created_events.find(params[:id])
  end

  def event_params
    params.require(:event).permit(
      :id,
      :name,
      :description,
      :group_id,
      :address
    )
  end

end
