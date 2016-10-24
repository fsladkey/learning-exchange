class AddUserColumns < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :username, :string, null: false
    add_column :users, :firstname, :string
    add_column :users, :lastname, :string
    add_column :users, :zipcode, :string
    add_column :users, :latitude, :float, null: false
    add_column :users, :longitude, :float, null: false

    add_index :users, :username, unique: true
    add_index :users, :latitude
    add_index :users, :longitude
  end
end
