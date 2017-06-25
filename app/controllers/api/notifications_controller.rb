class Api::NotificationsController < Api::ApiController
  def update
    @notification = Notification.find(params[:id])
    @notification.update!(seen: params[:notification][:seen])
    render :show
  end
end
