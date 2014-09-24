class PagesController < ApplicationController
  def index
    @manufacturers = Manufacturer.find(:all)
    # @manufacturer = Manufacturer.find(params[:id])
  end
end
