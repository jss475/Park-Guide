class AddPermitTrails < ActiveRecord::Migration[6.1]
  def change
    add_column :trails, :permit?, :boolean, default: false
  end
end
