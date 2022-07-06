class CreateUserFoods < ActiveRecord::Migration[6.1]
  def change
    create_table :user_foods do |t|
      t.integer :user_id
      t.integer :food_id
      t.boolean :upvote?
      t.boolean :downvote?
      t.boolean :favorite?
      t.string :review

      t.timestamps
    end
  end
end
