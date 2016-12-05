class CreateDirectMessages < ActiveRecord::Migration[5.0]
  def change
    create_table :direct_messages do |t|
      t.integer :sender_id, null: false
      t.integer :receiver_id, null: false
      t.text :body, null: false
      t.timestamps
    end

    add_index :direct_messages, :sender_id
    add_index :direct_messages, :receiver_id
  end
end
