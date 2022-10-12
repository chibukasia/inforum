class User < ApplicationRecord

    has_secure_password
    validates :username, uniqueness: true, presence: true
    validates :email, uniqueness: true, presence: true
    validates :password, presence: true
    # associations
    has_many :blogs
    has_many :comments 
end
