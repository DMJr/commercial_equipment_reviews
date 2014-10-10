class ManufacturersController < ApplicationController
  before_filter :authenticate_user!, only: [:new, :create, :destroy]

  def new
    @manufacturer = Manufacturer.new
    @user = current_user
  end

  def create
    @user = current_user
    @manufacturer = current_user.manufacturers.build(manufacturer_params)
    if @manufacturer.save
      redirect_to manufacturers_path, notice: "Success."
    else
      flash.now[:notice] = "Please create an account before posting."
      render :new
    end
  end
  def show
    @manufacturer = Manufacturer.find(params[:id])
  end
  def edit
    @manufacturer = Manufacturer.find(params[:id])
    if @manufacturer.user == current_user
      @manufacturer = current_user.manufacturers.find(params[:id])
    else
      redirect_to manufacturers_path, notice: "Sorry you can not edit post you did not create"
    end
  end
  def update
    @manufacturer = current_user.manufacturers.find(params[:id])
    if @manufacturer.update(manufacturer_params)
      redirect_to manufacturer_path(@manufacturer), notice: 'Business Updated'
    else
      render 'edit'
    end
  end
  def index
    @manufacturers = Manufacturer.find(:all)
  end

  protected
  def manufacturer_params
    params.require(:manufacturer).permit(:name, :description, :lat, :lng)
  end
end
