class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :password_confirmation, :password_digest, :name, :elite
end
