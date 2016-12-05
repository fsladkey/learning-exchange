class CreateChatMessages < ActiveRecord::Migration[5.0]
  def change
    create_table :chat_messages do |t|
      t.integer :sender_id, null: false
      t.integer :chattable_id, null: false
      t.string :chattable_type, null: false
      t.string :body, null: false
      t.timestamps
    end

    add_index :chat_messages, :sender_id
    add_index :chat_messages, :chattable_id
    add_index :chat_messages, :chattable_type
  end
end
