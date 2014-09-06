class Post < ActiveRecord::Base
  belongs_to :user,
    inverse_of: :posts

  validates :title, presence: true, length: { maximum: 140 }
  validates :body, presence: true
end
