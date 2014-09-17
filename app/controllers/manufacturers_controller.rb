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

  def index
  end

  protected
  def manufacturer_params
    params.require(:manufacturer).permit(:name, :description)
  end
end
