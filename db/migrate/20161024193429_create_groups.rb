class CreateGroups < ActiveRecord::Migration[5.0]
  def change
    create_table :groups do |t|
      t.string :name, null: false
      t.text :description
      t.string :zipcode, null: false
      t.float :latitude
      t.float :longitude

      t.timestamps
    end
  end
end
