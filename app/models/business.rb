class Business < ActiveRecord::Base
  belongs_to :user
  has_many :reviews

  validates :name, presence: true, length: { maximum: 50 }
  validates_format_of :name, :with => /\A[a-zA-Z]+\Z/
  validates :phone_number, presence: true
end
