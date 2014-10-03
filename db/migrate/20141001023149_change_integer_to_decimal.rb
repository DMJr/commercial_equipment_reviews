class ChangeIntegerToDecimal < ActiveRecord::Migration
  def up
    change_column :manufacturers, :lat, :decimal
    change_column :manufacturers, :lng, :decimal
  end
  def down
    change_column :manufacturers, :lat, :integer
    change_column :manufacturers, :lng, :integer
  end
end
