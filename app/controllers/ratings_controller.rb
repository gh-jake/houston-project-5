class RatingsController < ApplicationController
    before_action :authorize

    def create
        user = User.find_by(id: session[:user_id])
        show = user.shows.find_by(id: params[:show_id])
        rating = show.create_rating(rating_params)
        render json: rating
    end

    def update
        user = User.find_by(id: session[:user_id])
        show = user.shows.find_by(id: params[:show_id])
        if show
            rating = show.rating.update(rating_params)
            render json: rating
        else
            render json: {error: "Not authorized"}, status: :unauthorized
        end
    end

    def destroy
        user = User.find_by(id: session[:user_id])
        show = user.shows.find_by(id: params[:show_id])
        if show
            show.rating.destroy
        # else
        #     render json: {error: "Not authorized"}, status: :unauthorized
        end
    end

    private

    def rating_params
        params.permit(:id, :stars, :show_id)
    end

    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end
end

