class LiftgateModel < ActiveRecord::Base
  belongs_to :manufacturer

  validates :name, presence: true, length: { maximum: 50 }
  validates_format_of :name, :with => /\A[a-zA-Z]+\Z/
  validates :description, presence: true, length: { maximum: 200 }
end
