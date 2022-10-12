class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response   
    before_action :authorize
    skip_before_action :authorize, only: [:create]
    # handles signup
    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    # gets all users
    def index
        user = User.all
        render json: user, status: :ok
    end

    # get a single user
    def show 
        user = User.find_by(id: session[:user_id])
        render json: user, serializer: ShowUserBlogsSerializer, status: :ok
    end

    # update a single user
    def update
        user = find_params
        user.update!(user_params)
        render json: user, status: :accepted
    end

    # destroy a user
    def destroy
        user = find_params
        user.destroy
        head :no_content
        session.delete :user_id
    end

    private 

    # handles finding a user
    def find_params
        User.find(params[:id])
    end

    # permited parameters for create and update
    def user_params
        params.permit(:username, :password , :password_confirmation, :email, :image_url)
    end

    # handles error for missing user
    def render_not_found_response
        render json: { error: "user not found" }, status: :not_found
    end

    # check authorized user 
    def authorize
        render json: {error: "User not authorized"}, status: :unauthorized unless session.include? :user_id
    end
end
