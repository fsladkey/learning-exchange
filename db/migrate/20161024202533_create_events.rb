class CreateEvents < ActiveRecord::Migration[5.0]
  def change
    create_table :events do |t|
      t.string :name, null: false
      t.text :description
      t.integer :group_id
      t.integer :creator_id, null: false
      t.string :address
      t.float :latitude
      t.float :longitude

      t.timestamps
    end

    add_index :events, :latitude
    add_index :events, :longitude
    add_index :events, :group_id
    add_index :events, :creator_id
  end
end
