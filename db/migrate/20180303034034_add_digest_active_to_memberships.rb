class AddDigestActiveToMemberships < ActiveRecord::Migration[5.0]
  def change
    add_column :memberships, :digest_active, :boolean, default: false
  end
end
