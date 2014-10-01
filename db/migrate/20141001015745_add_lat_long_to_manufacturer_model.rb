class AddLatLongToManufacturerModel < ActiveRecord::Migration
  def up
    add_column :manufacturers, :lat, :integer
    add_column :manufacturers, :lng, :integer
  end
  def down
    remove_column :manufacturers, :lat
    remove_column :manufacturers, :lng
  end
end
