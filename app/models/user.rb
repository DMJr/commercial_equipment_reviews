class User < ActiveRecord::Base
  has_many :manufacturers
  has_many :posts,
    dependent: :destroy#,
    # inverse_of: :user
  has_many :businesses, dependent: :nullify
  has_many :reviews, dependent: :nullify

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
end
