class ShowUserBlogsSerializer < ActiveModel::Serializer
  attributes :id, :username, :image_url, :email
  has_many :blogs
end
