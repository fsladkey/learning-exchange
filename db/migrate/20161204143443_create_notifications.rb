class CreateNotifications < ActiveRecord::Migration[5.0]
  def change
    create_table :notifications do |t|
      t.integer :user_id, null: false
      t.integer :notifiable_id, null: false
      t.string :notifiable_type, null: false
      t.boolean :seen, default: false
      t.timestamps
    end

    add_index :notifications, :user_id
    add_index :notifications, :notifiable_id
    add_index :notifications, :notifiable_type
  end
end
