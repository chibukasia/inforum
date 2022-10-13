class BlogsController < ApplicationController

    rescue_from ActiveRecord::RecordNotFound, with: :blog_not_found
    before_action :authorize
    skip_before_action :authorize, only: [:index, :show]

    # GET blogs
    def index 
        blogs = Blog.all 
        render json: blogs
    end

    # GET blog
    def show 
        blog = find_blog
        render json: blog, status: :ok
    end

    # POST blog
    def create
        user = find_user
        blog = user.blogs.create!(blog_params)
        render json: blog, status: :created
    end 

    # PATCH blog
    def update 
        user = find_user
        blog = find_blog
        # check if blog author is the editor
        if user.id == blog.user_id
            blog.update!(blog_params)
            render json: blog, status: :accepted 
        else
            render json: {errors: ["Not authorized to edit this blog"]}, status: :unauthorized
        end
    end 

    # DELETE blog
    def destroy 
        user = find_user
        blog =  find_blog
        # Check if is author of the blog
        if user.id == blog.user_id
            blog.destroy
            head :no_content
        else
            render json: {errors: ["Not authorized to edit this blog"]}, status: :unauthorized
        end
    end 

    # Private methods 
    private 

    # Find a blog 
    def find_blog 
        Blog.find(params[:id])
    end 

    # Allow specific parameters 
    def blog_params 
        params.permit(:title, :content, :minutes_to_read, :likes, :user_id)
    end 

    # Blog not found response 
    def blog_not_found
        render json:  {errors: ["Blog not found"]}, status: :not_found 
    end 
    # Find user using session
    def find_user 
        user = User.find(session[:user_id])
    end 

    # Authorize users 
    def authorize 
        render json: {errors:["Not authorized"]}, status: :unauthorized unless session.include? :user_id
    end
end
