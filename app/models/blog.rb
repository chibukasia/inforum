class Blog < ApplicationRecord
    belongs_to :user 
    has_many :comments 

    # Validations 
    validates :title, presence: true 
    validates :content, presence: true, length: {minimum: 100}
    validates :minutes_to_read, presence: true
end
