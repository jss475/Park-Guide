class ChangeTypeFoods < ActiveRecord::Migration[6.1]
  def change
    remove_column :foods, :type
    add_column :foods, :food_type, :string
  end
end
