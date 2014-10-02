class PagesController < ApplicationController
  def index
    @manufacturers = Manufacturer.find(:all)
    @posts = Post.find(:all, :order => "id desc", :limit => 5)
    @businesses = Business.all
  end
end
