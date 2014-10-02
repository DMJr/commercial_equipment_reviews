class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.integer :user_id
      t.integer :business_id
      t.integer :manufacturer_id
      t.integer :rating
      t.string :title
      t.string :body

      t.timestamps
    end
  end
end
