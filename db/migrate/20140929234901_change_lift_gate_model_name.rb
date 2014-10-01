class ChangeLiftGateModelName < ActiveRecord::Migration
  def change
    rename_table :liftgate_models, :liftgatemodels
  end
end
