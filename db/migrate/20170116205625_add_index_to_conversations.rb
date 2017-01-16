class AddIndexToConversations < ActiveRecord::Migration[5.0]
  def change
    add_index :conversations, [:user_1_id, :user_2_id], unique: true
    add_index :conversations, :user_2_id
  end
end
