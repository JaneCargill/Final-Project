class AddLocationToFriends < ActiveRecord::Migration[5.0]
  def change
    add_column :friends, :location, :string
  end
end
