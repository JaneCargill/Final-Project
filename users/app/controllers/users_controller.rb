class UsersController < ApplicationController
  before_action :authenticate_user!

  def index
    render ({ json: current_user })
  end

  def show
    users = User.all
    render json: users
  end

  # def create
  #   user = User.create( sign_up_params )
  #   render json: user, status: :created
  # end

  

  
end