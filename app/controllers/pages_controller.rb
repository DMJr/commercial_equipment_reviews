class PagesController < ApplicationController
  def index
    @manufacturers = Manufacturer.find(:all)
    @posts = Post.find(:all)
  end
end
