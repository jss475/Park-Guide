class User < ApplicationRecord
    has_secure_password
    has_many :user_foods
    has_many :foods, through: :user_foods
    has_many :user_lodgings
    has_many :lodgings, through: :user_lodgings
    has_many :user_trails
    has_many :trails, through: :user_trails

    validates :name, presence: true
    validates :email, presence: true, uniqueness: true
    validates_format_of :email, with: URI::MailTo::EMAIL_REGEXP
    validates :password_digest, presence: true, confirmation: true
    validates :password_confirmation, presence: true

    validate :password_lower_case
    validate :password_uppercase
    validate :password_special_char
    validate :password_contains_number
    
    private 
    def password_uppercase
      return if !!password_digest.match(/\p{Upper}/)
      errors.add :password, ' must contain at least 1 uppercase '
    end
  
    def password_lower_case
      return if !!password_digest.match(/\p{Lower}/)
      errors.add :password, ' must contain at least 1 lowercase '
    end
  
    def password_special_char
      special = "?<>',?[]}{=-)(*&^%$#`~{}!"
      regex = /[#{special.gsub(/./){|char| "\\#{char}"}}]/
      return if password_digest =~ regex
      errors.add :password, ' must contain special character'
    end
  
    def password_contains_number
      return if password_digest.count("0-9") > 0
      errors.add :password, ' must contain at least one number'
    end
end
