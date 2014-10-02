class Review < ActiveRecord::Base
  USER_RATING_FOR_BUSINESS = %w(1 2 3 4 5)
  belongs_to :user
end
