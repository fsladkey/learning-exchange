class CreateInvitations < ActiveRecord::Migration[5.0]
  def change
    create_table :invitations do |t|
      t.integer :event_id
      t.integer :inviter_id
      t.integer :invitee_id

      t.timestamps
    end

    add_index :invitations, :event_id
    add_index :invitations, :inviter_id
    add_index :invitations, :invitee_id
  end
end
