class CreateFollows < ActiveRecord::Migration[5.0]
  def change
    create_table :follows do |t|
      t.integer :followed_user_id, null: false
      t.integer :following_user_id, null: false
      t.timestamps
    end
    add_index :follows, :followed_user_id
    add_index :follows, :following_user_id
  end
end
