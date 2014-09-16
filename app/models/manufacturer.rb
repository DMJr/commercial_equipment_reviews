class Manufacturer < ActiveRecord::Base
  belongs_to :user

  validates :name, presence: true, length: { maximum: 50 }
  validates_format_of :name, :with => /\A[a-zA-Z]+\Z/
  validates :description, presence: true, length: { maximum: 200 }
  # validates_format_of :description, :with => /\A[a-zA-Z]+\Z/
  validates :user, presence: true
end
