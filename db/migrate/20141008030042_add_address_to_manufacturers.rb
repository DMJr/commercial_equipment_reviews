class AddAddressToManufacturers < ActiveRecord::Migration
  def change
    add_column :manufacturers, :address1, :string
    add_column :manufacturers, :address2, :string
    add_column :manufacturers, :city, :string
    add_column :manufacturers, :state, :string
    add_column :manufacturers, :zip, :string
    add_column :manufacturers, :phone_number, :string
  end
end
