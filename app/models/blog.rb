class Blog < ApplicationRecord

    belongs_to :user 
    has_many :comments, dependent: :destroy

    # Validations 
    validates :title, presence: true 
    validates :content, presence: true, length: {minimum: 10}
    validates :minutes_to_read, presence: true
end
