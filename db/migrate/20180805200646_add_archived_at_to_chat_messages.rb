class AddArchivedAtToChatMessages < ActiveRecord::Migration[5.0]
  def change
    add_column :chat_messages, :archived_at, :datetime
  end
end
