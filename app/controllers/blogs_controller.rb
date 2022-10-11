class BlogsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :blog_not_found

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
        blog = Blog.create!(blog_params)
        render json: blog, status: :created
    end 

    # PATCH blog
    def update 
        blog = find_blog
        blog.update!(blog_params)
        render json: blog, status: :accepted
    end 

    # DELETE blog
    def destroy 
        blog =  find_blog
        blog.destroy
        head :no_content
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
        render json:  {error: "Blog not found"}, status: :not_found 
    end
end
