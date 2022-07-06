class TrailSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :proximity, :mileage, :elevation_gain, :starting_elevation, :route_type, :difficulty, :estimated_time, :pictures, :food, :water, :upvote, :downvote, :starting_lat, :starting_long, :ending_lat, :ending_long, :permit?
  has_many :user_trails, serializer: ReviewSerializer
end
