class AddChatEnabledToGroups < ActiveRecord::Migration[5.0]
  def change
    add_column :groups, :chat_enabled, :boolean, default: false, nullable: false
  end
end
