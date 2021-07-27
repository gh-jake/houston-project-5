class ShowsController < ApplicationController
    before_action :authorize

    def index
        user = User.find_by(id: session[:user_id])
        shows = user.shows
        render json: shows
    end

    def show
        user = User.find_by(id: session[:user_id])
        show = user.shows.find_by(id: params[:id])
        if show
            render json: show
        else
            render json: {error: "Not authorized"}, status: :unauthorized
        end
    end

    def create
        user = User.find_by(id: session[:user_id])
        show = user.shows.create(show_params)
        render json: show
    end

    def update
        user = User.find_by(id: session[:user_id])
        show = user.shows.find_by(id: params[:id])
        show.update(show_params)
        render json: show
    end

    def destroy
        user = User.find_by(id: session[:user_id])
        show = user.shows.find_by(id: params[:id])
        show.destroy
        head :no_content
    end

    private

    def show_params
        params.permit(:title, :start_year, :end_year, :seasons, :category, :description)
    end

    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end
end
