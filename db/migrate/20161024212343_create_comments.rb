class CreateComments < ActiveRecord::Migration[5.0]
  def change
    create_table :comments do |t|
      t.text :body
      t.integer :author_id
      t.boolean :deleted, default: false
      t.references :commentable, polymorphic: true, index: true
      
      t.timestamps
    end

    add_index :comments, :author_id
  end
end
