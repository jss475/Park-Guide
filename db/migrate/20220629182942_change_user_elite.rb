class ChangeUserElite < ActiveRecord::Migration[6.1]
  def change
    change_column :users, :elite, :boolean, default: false
  end
end
