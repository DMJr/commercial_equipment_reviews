class ChangeIntsToDecimalsInBusinessForLatLong < ActiveRecord::Migration
  def up
    change_column :businesses, :lat, :decimal
    change_column :businesses, :lng, :decimal
  end
  def down
    change_column :businesses, :lat, :integer
    change_column :businesses, :lng, :integer
  end
end
