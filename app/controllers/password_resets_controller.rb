class PasswordResetsController < ApplicationController

  skip_before_action :authorize, only: [:create, :update]

  def create
    user = User.find_by(email: params[:email])
    user&.send_password_reset if user
    render json: {message: "Email sent with password reset instructions"}
  end

  def edit
    @user = User.find_by_password_reset_token!(params[:id])
  end

  def update
    @user = User.find_by_password_reset_token!(params[:id])
    if @user.password_reset_sent_at < 2.hours.ago
      render json: {error: ["Password reset has expired"]}, status: :unprocessable_entity
    elsif @user.update_attributes(user_params)
      render json: @user
    else
      render json: {error: @user.errors.full_messages}, status: :unprocessable_entity
    end



end
