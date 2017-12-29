class AddActiveFlagToMemberships < ActiveRecord::Migration[5.0]
  def change
    add_column :memberships, :active, :boolean, default: true
  end
end
