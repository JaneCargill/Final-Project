class AddFriendToFriend < ActiveRecord::Migration[5.0]
  def change
    add_column :friends, :friend, :string
  end
end
