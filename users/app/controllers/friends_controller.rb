class FriendsController < ApplicationController

  def index
    friends = Friend.all
    render ({ :json => friends.to_json() })
  end

end