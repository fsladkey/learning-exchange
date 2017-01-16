class AddSeenToDirectMessages < ActiveRecord::Migration[5.0]
  def change
    create_table :conversations do |t|
      t.integer :user_1_id
      t.integer :user_2_id
      t.timestamps
    end

    add_column :direct_messages, :seen, :boolean, default: false
    add_column :direct_messages, :conversation_id, :integer
    DirectMessage.all.each do |dm|
      convo = Conversation.find_by(
        user_1_id: dm.sender_id,
        user_2_id: dm.receiver_id
      ) || Conversation.find_by(
        user_2_id: dm.sender_id,
        user_1_id: dm.receiver_id
      ) || Conversation.create!(
        user_1_id: dm.sender_id,
        user_2_id: dm.receiver_id
      )
      dm.update!(conversation_id: convo.id)
    end
  end
end
