class UsersController < ApplicationController

    def show
        user = User.find(session[:user_id])
        render json: user, status: :ok
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    private

    def user_params
        params.permit(:email, :password, :password_confirmation, :password_digest, :name)
    end
end
