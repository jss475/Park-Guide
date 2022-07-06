class CreateTrails < ActiveRecord::Migration[6.1]
  def change
    create_table :trails do |t|
      t.string :name
      t.string :location
      t.string :proximity
      t.float :mileage
      t.float :elevation_gain
      t.float :starting_elevation
      t.string :starting_loc
      t.string :ending_loc
      t.string :route_type
      t.string :difficulty
      t.integer :estimated_time
      t.string :pictures, default: [], array: true
      t.integer :food
      t.integer :water
      t.integer :upvote, default: 0
      t.integer :downvote, default: 0
      
      t.timestamps
    end
  end
end
