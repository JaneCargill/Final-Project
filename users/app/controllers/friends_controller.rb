class FriendsController < ApplicationController
  before_action :authenticate_user!


  def index
    friends = Friend.where({
      user_id: current_user.id
      })
    render ({ :json => friends.to_json() })
  end

  def show 
    friend = Friend.find(params[:id])
    render :json => friends.to_json(
      {
        include:
        {friends: {only: :name}}
      })
  end

  def create
    friend = Friend.create(friends_params())
    render :json => friend.to_json
  end

  private
  def friends_params 
    params.require(:friends).permit(:friend, :user_id)
  end
end