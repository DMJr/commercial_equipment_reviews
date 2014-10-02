class AddPhoneColumnToBusinessModel < ActiveRecord::Migration
  def up
    add_column :businesses, :phone_number, :integer
  end
  def down
    remove_column :businesses, :phone_number
  end
end
