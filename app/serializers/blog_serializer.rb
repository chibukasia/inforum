class BlogSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :minutes_to_read, :likes, :created_at 
  belongs_to :user
  has_many :comments
end
