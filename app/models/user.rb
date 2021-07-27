class User < ApplicationRecord
    has_secure_password
    validates :name, presence: true, uniqueness: true
    has_many :shows
    has_many :lists, through: :shows
    has_many :ratings, through: :shows
end