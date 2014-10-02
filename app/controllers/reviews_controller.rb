class ReviewsController < ApplicationController
  def new
    @review = Review.new
    @businesses = Business.all
    @manufacturers = Manufacturer.all
  end
  def create
    @user = current_user
    @review = current_user.reviews.build(review_params)
    if @review.save
      redirect_to reviews_path, notice: "Success."
    else
      flash.now[:notice] = "Please create an account before posting."
      render :new
    end
  end
  def index
    @reviews = Review.all
  end
  protected
  def review_params
    params.require(:review).permit(:user_id, :business_id, :manufacturer_id, :rating, :title, :body,)
  end
end
