class UserLodgingsController < ApplicationController

    def index
        render json: UserLodging.all, status: :ok
    end
    
    def show
        ul = UserLodging.find(params[:id])
        render json: ul, status: ok
    end
    
    def create
        ul = UserLodging.create!(ul_params)
        render json: ul, status: :created
    end

    def update
        ul = UserLodging.find(params[:id])
        ul.update(ul_params)
        render json: ul, status: :ok
    end

    def destroy
        ul = UserLodging.find(params[:id])
        ul.destroy
        head :no_content
    end

    private

    def ul_params
        params.permit(:user_id, :lodging_id, :upvote?, :downvote?, :favorite?, :review)
    end
end
