class ReviewsController < ApplicationController
    def create
        @review = Review.create!(review_params)
        render json: @review, status: :created
    end
    
    def destroy
        @review = Review.find(params[:id])
        @review.destroy
        render json: { message: "Review deleted" }, status: :ok
    end
    
    private
    def review_params
        params.permit(:comment, :rating, :template_id, :user_id)
    end
end
