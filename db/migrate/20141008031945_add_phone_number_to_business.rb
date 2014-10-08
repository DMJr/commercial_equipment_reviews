class AddPhoneNumberToBusiness < ActiveRecord::Migration
  def up
    add_column :businesses, :phone_number, :string
  end
  def down
    remove_column :businesses, :phone_number
  end
end
