class AddLatLongToBusinessModel < ActiveRecord::Migration
  def up
    add_column :businesses, :lat, :integer
    add_column :businesses, :lng, :integer
  end
  def down
    remove_column :businesses, :lat
    remove_column :businesses, :lng
  end
end
