class UserTrailSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :trail_id, :upvote?, :downvote?, :favorite?, :review
  has_one :user
end
