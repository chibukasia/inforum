class UsersController < ApplicationController

    def create
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def index
        user = User.all
        render json: user, status: :ok
    end

    private 
    def user_params
        params.permit(:username, :password ,:email,:image_url)
    end

end
