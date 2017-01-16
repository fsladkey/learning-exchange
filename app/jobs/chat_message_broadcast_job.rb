class ChatMessageBroadcastJob < ApplicationJob
  queue_as :default

  def perform(message)
    ActionCable.server.broadcast(
      "#{message.chattable_type}_#{message.chattable_id}",
      render_message(message)
    )
  end

  private

  def render_message(message)
    ApplicationController.render(
      partial: 'api/chat_messages/chat_message',
      locals: { message: message }
    )
  end
end
