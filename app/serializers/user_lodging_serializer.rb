class UserLodgingSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :lodging_id, :upvote?, :downvote?, :favorite?, :review
end
