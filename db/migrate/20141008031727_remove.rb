class Remove < ActiveRecord::Migration
  def up
    remove_column :businesses, :phone_number
  end
  def down
    add_column :businesses, :phone_number, :integer
  end
end
