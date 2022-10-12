class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    # handles signup
    def create
        user = User.create!(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        end
    end

    # gets all users
    def index
        user = User.all
        render json: user, status: :ok
    end

    # update a single user
    def update
        user = find_params
        user.update!(user_params)
        render json: user, status: :ok

    end

    # destroy a user
    def destroy
        user = find_params
        user.delete
        head :no_content
    end

    private 

    # handles finding a user
    def find_params
        User.find(params[:id])
    end

    # permited parameters for create and update
    def user_params
        params.permit(:username, :password ,:email,:image_url)
    end

    # handles error for missing user
    def render_not_found_response
        render json: { error: "user not found" }, status: :not_found
    end

end
