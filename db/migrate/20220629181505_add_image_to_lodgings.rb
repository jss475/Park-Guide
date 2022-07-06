class AddImageToLodgings < ActiveRecord::Migration[6.1]
  def change
    add_column :lodgings, :image, :string
  end
end
