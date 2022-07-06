class ChangeTrails < ActiveRecord::Migration[6.1]
  def change
    add_column :trails, :starting_lat, :float
    add_column :trails, :starting_long, :float
    add_column :trails, :ending_lat, :float
    add_column :trails, :ending_long, :float
    remove_column :trails, :starting_loc
    remove_column :trails, :ending_loc
  end
end
