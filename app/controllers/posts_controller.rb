class PostsController < ApplicationController
  before_filter :authenticate_user!, only: [:new, :create]

  def new
    @post = Post.new
    @user = current_user
  end

  def create
    @user = current_user
    @post = current_user.posts.build(post_params)
    if @post.save
      redirect_to posts_path, notice: "Post created successfully."
    else
      flash.now[:notice] = "Please create an account before posting."
      render :new
    end
  end

  def index
    @posts = Post.find(:all)
  end

  protected
  def post_params
    params.require(:post).permit(:title, :body)
  end
end
