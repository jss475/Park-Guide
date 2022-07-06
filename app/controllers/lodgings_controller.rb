class LodgingsController < ApplicationController

    wrap_parameters format: []
    def index
        render json: Lodging.all, status: :ok
    end

    def show
        render json: lodging_find, status: :ok
    end

    def create
        lodging = Lodging.create!(lodging_params)
        render json: lodging, status: :created
    end

    def update
        lodging_find.update!(lodging_params)
        render json: lodging_find, status: :ok
    end

    def destroy
        lodging_find.destroy
        head :no_content
    end

    private


    def lodging_params
        params.permit(:name, :address, :website, :proximity, :upvote, :downvote, :image, :lodging_amenity => [], :room_amenity =>[])
    end

    def lodging_find
        Lodging.find(params[:id])
    end
end
