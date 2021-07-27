class ListsController < ApplicationController
    before_action :authorize

    def index
        user = User.find_by(id: session[:user_id])
        lists = user.lists
        render json: lists
    end

    def show
        user = User.find_by(id: session[:user_id])
        list = user.lists.find_by(id: params[:id])
        if list
            render json: list
        else
            render json: {error: "Not authorized"}, status: :unauthorized
        end
    end

    def create
        user = User.find_by(id: session[:user_id])
        list = user.lists.create(list_params)
        render json: list
    end

    def update
        user = User.find_by(id: session[:user_id])
        list = user.lists.find_by(id: params[:id])
        list.update(list_params)
        render json: list
    end

    def destroy
        user = User.find_by(id: session[:user_id])
        list = user.lists.find_by(id: params[:id])
        list.destroy
        head :no_content
    end

    private

    def list_params
        params.permit(:title)
    end

    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end
end
