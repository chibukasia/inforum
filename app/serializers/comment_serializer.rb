class CommentSerializer < ActiveModel::Serializer
  attributes :id, :comment, :created_at, :user_id, :blog_id
end
