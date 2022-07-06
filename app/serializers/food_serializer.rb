class FoodSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :website, :pictures, :proximity, :upvote, :downvote, :food_type, :description, :latitude, :longitude
  has_many :user_foods, serializer: ReviewSerializer
end
