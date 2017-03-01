class RegistrationsController < Devise::RegistrationsController  
    respond_to :json

    private
    def sign_up_params 
      params.require(:user).permit(:name, :email, :location, :password, :password_confirmation)
    end
end 