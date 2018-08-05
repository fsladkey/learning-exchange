class Api::ChatMessagesController < Api::ApiController

  def index
    @messages = ChatMessage.where(
      chattable_id: params[:chattable_id],
      chattable_type: params[:chattable_type],
      created_at: (Time.now - 1.month)..Time.now
    ).active
  end

  def create
    @message = current_user.chat_messages.new(message_params)
    if @message.save
      render :show
    else
      render json: @message.errors
    end
  end

  private

  def message_params
    params.require(:chat_message).permit(:body, :chattable_id, :chattable_type)
  end

end
