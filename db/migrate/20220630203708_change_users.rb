class ChangeUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :email, :string
    add_column :users, :password_confirmation, :string
    remove_column :users, :username
  end
end
