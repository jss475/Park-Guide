class CreateUserLodgings < ActiveRecord::Migration[6.1]
  def change
    create_table :user_lodgings do |t|
      t.integer :user_id
      t.integer :lodging_id
      t.boolean :upvote?
      t.boolean :downvote?
      t.boolean :favorite?
      t.string :review
      
      t.timestamps
    end
  end
end
