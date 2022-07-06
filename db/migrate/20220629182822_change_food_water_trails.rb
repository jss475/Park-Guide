class ChangeFoodWaterTrails < ActiveRecord::Migration[6.1]
  def change
    change_column :trails, :food, :integer, default: 0
    change_column :trails, :water, :integer, default: 0
  end
end
