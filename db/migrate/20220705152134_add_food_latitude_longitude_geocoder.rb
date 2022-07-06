class AddFoodLatitudeLongitudeGeocoder < ActiveRecord::Migration[6.1]
  def change
    add_column :foods, :latitude, :string
    add_column :foods, :longitude, :string
  end
end
