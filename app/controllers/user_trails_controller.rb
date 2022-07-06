class UserTrailsController < ApplicationController

    def index
        render json: UserTrail.all, status: :ok
    end
    
    def show
        ut = UserTrail.find(params[:id])
        render json: ut, status: :ok
    end

    def create
        ut = UserTrail.create!(ut_params)
        render json: ut, status: :created
    end

    def update
        ut = UserTrail.find(params[:id])
        ut.update!(ut_params)
        render json: ut, status: :ok
    end

    def destroy
        ut = UserTrail.find(params[:id])
        ut.destroy
        head :no_content
    end

    private

    def ut_params
        params.permit(:user_id, :trail_id, :upvote?, :downvote?, :favorite?, :review)
    end

end
