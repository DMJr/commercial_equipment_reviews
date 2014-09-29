class CreateLiftgateModels < ActiveRecord::Migration
  def change
    create_table :liftgate_models do |t|
      t.string :name
      t.text :description
      t.integer :manufacturer_id

      t.timestamps
    end
  end
end
