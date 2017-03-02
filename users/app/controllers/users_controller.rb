class UsersController < ApplicationController
  before_action :authenticate_user!

  def index
    render ({ json: current_user })
  end

  def show
    users = User.all
    render json: users
  end

  def update
    user = User.find(params[:id])

    if user.update_attributes(user_params())
      render ({ json: user })
    else 
      render ({ json: :update_failed })
    end
  end

  private
  def users_params 
    params.require(:users).permit(:location)
  end

  # def create
  #   user = User.create( sign_up_params )
  #   render json: user, status: :created
  # end

  

  
end