class Manufacturer < ActiveRecord::Base
  belongs_to :user
#   has_many :liftgatemodels,
#     inverse_of: :manufacturer

  validates :name, presence: true, length: { maximum: 50 }
  validates_format_of :name, :with => /\A[a-zA-Z]+\Z/
  validates :description, presence: true, length: { maximum: 200 }
  # validates_format_of :description, :with => /\A[a-zA-Z]+\Z/
  validates :user, presence: true

  # def latlong
  #   latlong = lat + ',' + long
  #   return latlong.to_s
  # end
end
