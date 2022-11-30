class SessionsController < ApplicationController

    skip_before_action :authorize, only: :create

    def create
        user = User.find_by(email: params[:email]) || User.find_by(username: params[:username])
        if user && user.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: {errors: ["Invalid email or password"]}, status: :unprocessable_entity
        end
    end

    def destroy
        session.delete :user_id
        render json: {message: "Logged out"}, status: :ok
    end


end
