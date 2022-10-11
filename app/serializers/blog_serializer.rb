class BlogSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :minutes_to_read
end
