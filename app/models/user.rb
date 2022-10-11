class User < ApplicationRecord

    has_secure_password
    validates :username, uniqueness: true, presence: true
    
    has_many :blogs
    has_many :comments
end
