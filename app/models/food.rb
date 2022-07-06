class Food < ApplicationRecord
    has_many :user_foods
    has_many :users, through: :user_foods
    geocoded_by :address
    validates :address, presence: true
    after_validation :geocode

    validates :description, presence: true, length: {minimum: 50}
    validates :website, format: URI::DEFAULT_PARSER.regexp[:ABS_URI]
end
