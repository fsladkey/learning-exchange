class Api::EventsController < Api::ApiController

  def index
    @events = Event.within(10, origin: current_user)
  end

  def show
    @event = Event.find(params[:id])
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

  def normalize_event_names
    params[:event] and params[:event][:start_time] = params[:event][:start]
    params[:event] and params[:event][:end_time] = params[:event][:end]
  end

  def event_params
    normalize_event_names
    params.require(:event).permit(
      :id,
      :name,
      :description,
      :group_id,
      :address,
      :start_time,
      :end_time
    )
  end

end
