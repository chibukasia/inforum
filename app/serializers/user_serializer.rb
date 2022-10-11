class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :image_url, :email
end
