class UserFoodsController < ApplicationController

    def index
        render json: UserFood.all, status: :ok
    end
    
    def show
        uf = UserFood.find(params[:id])
        render json: uf, status: :ok
    end

    def create
        uf = UserFood.create!(uf_params)
        render json: uf, status: :created
    end

    def update
        uf = UserFood.find(params[:id])
        uf.update(uf_params)
        render json: uf, status: :ok
    end

    def destroy
        uf = UserFood.find(params[:id])
        uf.destroy
        head :no_content
    end

    private

    def uf_params
        params.permit(:user_id, :food_id, :upvote?, :downvote?, :favorite?, :review)
    end
end
