class CreateTaggings < ActiveRecord::Migration[5.0]
  def change
    create_table :taggings do |t|
      t.integer :tag_id, null: false
      t.references :taggable, polymorphic: true, index: true

      t.timestamps
    end

    add_index :taggings, :tag_id
  end
end
