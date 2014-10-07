class Business < ActiveRecord::Base
  belongs_to :user
  has_many :reviews

  validates :name, presence: true, length: { maximum: 50 }
  validates_format_of :name, :with => /\A[a-zA-Z][a-zA-Z0-9 \-']+\Z/
  validates :phone_number, presence: true
  # validates_format_of :phone_number, :with => /\A\d{10}\Z/
end
