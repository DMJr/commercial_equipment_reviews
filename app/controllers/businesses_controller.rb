class BusinessesController < ApplicationController
  def new
    @business = Business.new
  end
  def create
    @user = current_user
    @business = current_user.businesses.build(business_params)
    if @business.save
      redirect_to businesses_path, notice: "Success."
    else
      flash.now[:notice] = "Please create an account before posting."
      render :new
    end
  end
  def show
    @business = Business.find(params[:id])
  end
  def index
    if params['q']
      if params['q']['name']
        name = params[:q][:name]
        @businesses = Business.where("name ilike ?", "%#{name}%")
      elsif params['q']['state']
        state = ['q']['state']
        @businesses = Business.where(:name => state)
      end
      if params['q']['name'] == 'all'
        @businesses = Business.all
      end
    else
      @businesses = Business.all
    end
  end
  def edit
    @business = Business.find(params[:id])
    if @business.user == current_user
      @business = current_user.businesses.find(params[:id])
    else
      redirect_to businesses_path, notice: "Sorry you can not edit post you did not create"
    end
  end

  def update
    @business = current_user.businesses.find(params[:id])
    if @business.update(business_params)
      redirect_to business_path(@business), notice: 'Business Updated'
    else
      render 'edit'
    end
  end
  protected
  def business_params
    params.require(:business).permit(:name, :description, :owner, :address1, :address2, :city, :state, :zip, :phone_number, :lat, :lng)
  end
end
