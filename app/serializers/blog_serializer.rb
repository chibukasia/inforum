class BlogSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :minutes_to_read, :likes, :created_at, :summary
  belongs_to :user
  has_many :comments 

  def summary 
    "#{self.object.content[0..150]...}"
  end
end
