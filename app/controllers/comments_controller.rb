class CommentsController < ApplicationController
    before_action :authorize
    skip_before_action :authorize, only: [:index]
    def index
        comments = Comment.all 
        render json: comments
    end

    # POST a comment
    def create
        user = User.find(session[:user_id]) 
        comment = user.comments.create!(comment_params) 
        render json: comment, status: :created
    end 

    def destroy
        user = User.find(session[:user_id]) 
        comment = Comment.find(params[:id])
        if user.id == comment.user_id
            comment.destroy
            head :no_content
        else
            render json: {error: "Unauthorized user"}, status: :unauthorized
        end
    end

    # Private 
    private 
    def authorize
        render json: {error: "login or sign up to comment"}, status: :unauthorized unless session.include? :user_id
    end

    def comment_params
        params.permit(:comment, :user_id, :blog_id) 
    end 
end
