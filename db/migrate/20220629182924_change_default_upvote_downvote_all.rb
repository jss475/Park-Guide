class ChangeDefaultUpvoteDownvoteAll < ActiveRecord::Migration[6.1]
  def change
    change_column :user_foods, :upvote?, :boolean, default: false
    change_column :user_foods, :downvote?, :boolean, default: false
    change_column :user_foods, :favorite?, :boolean, default: false
    change_column :user_lodgings, :upvote?, :boolean, default: false
    change_column :user_lodgings, :downvote?, :boolean, default: false
    change_column :user_lodgings, :favorite?, :boolean, default: false
    change_column :user_trails, :upvote?, :boolean, default: false
    change_column :user_trails, :downvote?, :boolean, default: false
    change_column :user_trails, :favorite?, :boolean, default: false
  end
end
