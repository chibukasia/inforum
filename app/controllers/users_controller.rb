class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def create
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: { errors: user.errors.full_messages }
        end
    end

    def index
        user = User.all
        render json: user, status: :ok
    end

    def update
        user = find_params
        user.update!(user_params)
        render json: user, status: :ok

    end

    def destroy
        user = find_params
        user.delete
        head :no_content
    end

    private 

    def find_params
        User.find(params[:id])
    end

    def user_params
        params.permit(:username, :password ,:email,:image_url)
    end

    def render_not_found_response
        render json: { error: "user not found" }, status: :not_found
    end

end
