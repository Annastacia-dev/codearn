class UsersController < ApplicationController

    skip_before_action :authorize, only: :create

    def create 
        @user = User.create!(user_params)
        cookies[:auth_token] = @user.auth_token
        render json: @user, status: :created
    end

    def profile 
        render json: @current_user, status: :ok
    end

    def update 
        @current_user.update!(user_params)
        render json: @current_user, status: :ok
    end

    private 

    def user_params
        params.permit(
            :first_name, :last_name, :username, :email, :password, :password_confirmation,
            :remember_me, :premium, :seller
            )
    end


end
