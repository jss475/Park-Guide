class Lodging < ApplicationRecord
    has_many :user_lodgings
    has_many :users, through: :user_lodgings

    validate :lodging_amenity_is_array
    validates :lodging_amenity, presence: true
    validates :room_amenity, presence: true

    private

    def lodging_amenity_is_array
      if !lodging_amenity.kind_of?(Array)
        errors.add(:lodging_amenity, "must be an array")
      end
    end
end
