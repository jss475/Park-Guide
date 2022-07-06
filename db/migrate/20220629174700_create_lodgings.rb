class CreateLodgings < ActiveRecord::Migration[6.1]
  def change
    create_table :lodgings do |t|
      t.string :name
      t.string :address
      t.string :website
      t.string :proximity
      t.string :lodging_amenity, default: [], array: true
      t.string :room_amenity, default: [], array: true
      t.integer :upvote, default: 0
      t.integer :downvote, default: 0
      
      t.timestamps
    end
  end
end
