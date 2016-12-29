class Api::DirectMessagesController < Api::ApiController

  def index
    @messages = current_user.all_messages.includes(:sender, :receiver)
  end

  def create
    @message = current_user.sent_messages.new(message_params)
    if @message.save
      render :show
    else
      render json: @message.errors
    end
  end

  private

  def message_params
    params.require(:direct_message).permit(:body, :receiver_id)
  end

end
