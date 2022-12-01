class SessionsController < ApplicationController

    skip_before_action :authorize, only: :create

    def create
        user = User.find_by(email: params[:email])
        if user && user.authenticate(params[:password])
            if (params[:remember_me])
            cookies.permanent[:auth_token] = user.auth_token
            else
            cookies[:auth_token] = user.auth_token
            end
            render json: user, status: :created
        else
            render json: {errors: ["Invalid email or password"]}, status: :unprocessable_entity
        end
    end

    def destroy
        cookies.delete(:auth_token)
        render json: {message: "Logged out"}, status: :ok
    end


end
