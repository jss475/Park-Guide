class LodgingSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :website, :proximity, :lodging_amenity, :room_amenity, :upvote, :downvote, :image
  has_many :user_lodgings, serializer: ReviewSerializer
end
