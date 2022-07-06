class ChangeEstimatedTimeTrails < ActiveRecord::Migration[6.1]
  def change
    change_column :trails, :estimated_time, :string
  end
end
