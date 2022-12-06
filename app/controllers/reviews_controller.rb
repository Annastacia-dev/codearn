class ReviewsController < ApplicationController
    def create
        @review = Review.new(review_params)
        @review.user = current_user
        @review.save
        redirect_to @review.template
    end
    
    def destroy
        @review = Review.find(params[:id])
        @review.destroy
        redirect_to @review.template
    end
    
    private
    def review_params
        params.permit(:comment, :rating, :template_id, :user_id)
    end
end
