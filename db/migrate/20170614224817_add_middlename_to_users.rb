class AddMiddlenameToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :middlename, :string
  end
end
