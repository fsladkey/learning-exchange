class Api::NotificationsController < ApplicationController
  def update
    @notification = Notification.find(params[:id])
    @notification.update!(seen: params[:notifications][:seen])
    render :show
  end
end
