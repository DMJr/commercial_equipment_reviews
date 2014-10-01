class ChangeIntegerToDecimal < ActiveRecord::Migration
  def up
    add_column :manufacturers, :lat, :decimal
    add_column :manufacturers, :lng, :decimal
  end
  def down
    remove_column :manufacturers, :lat, :integer
    remove_column :manufacturers, :lng, :integer
  end
end
