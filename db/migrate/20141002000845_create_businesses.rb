class CreateBusinesses < ActiveRecord::Migration
  def change
    create_table :businesses do |t|
      t.string :name
      t.text :description
      t.integer :user_id
      t.string :owner
      t.string :address1
      t.string :address2
      t.string :city
      t.string :state
      t.integer :zip

      t.timestamps
    end
  end
end
