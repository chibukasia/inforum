class User < ApplicationRecord

    has_secure_password
    validates :username, uniqueness: true, presence: true
    validates :email, uniqueness: true, presence: true
    validates :password, presence: true
    
    has_many :blogs
    has_many :comments, through: :blogs 
end