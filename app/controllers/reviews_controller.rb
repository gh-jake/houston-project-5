class ReviewsController < ApplicationController
    before_action :authorize

    def create
        user = User.find_by(id: session[:user_id])
        show = user.shows.find_by(id: params[:show_id])
        review = show.create_review(review_params)
        render json: review
    end

    def update
        user = User.find_by(id: session[:user_id])
        show = user.shows.find_by(id: params[:show_id])
        if show
            review = show.review.update(review_params)
            render json: review
        else
            render json: {error: "Not authorized"}, status: :unauthorized
        end
    end

    def destroy
        user = User.find_by(id: session[:user_id])
        show = user.shows.find_by(id: params[:show_id])
        if show
            show.review.destroy
        # else
        #     render json: {error: "Not authorized"}, status: :unauthorized
        end
    end

    private

    def review_params
        params.permit(:id, :text, :show_id)
    end

    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end
end

