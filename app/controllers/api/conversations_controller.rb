class Api::ConversationsController < ApplicationController
  def index
    @conversations = current_user.conversations
  end

  def create
    message = current_user.sent_messages.new(message_params)
    if message.save
      @conversation = message.conversation
      render :show
    else
      render json: message.errors, status: 422
    end
  end

  def show
    @conversation = conversation
  end

  def update
    conversation
      .direct_messages
      .where(receiver: current_user)
      .update_all(seen: true)
    render :show
  end

  private

  def conversation
    @conversation ||= current_user.conversation_with(other_user)
  end

  def other_user
    @other_user ||= User.find_by(username: params[:username])
  end

  def message_params
    params.require(:conversation).permit(:receiver_id, :body, :conversation_id)
  end


end
