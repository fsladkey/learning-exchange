class Api::NotificationsController < Api::ApiController
  def update
    notification.update!(seen: params[:notification][:seen])
    render :show
  end

  def destroy
    notification.destroy!
    render :show
  end

  def notification
    @notification ||= Notification.find(params[:id])
  end
end
