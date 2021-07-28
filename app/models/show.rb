class Show < ApplicationRecord
    validates :imdb_id, uniqueness: true
    belongs_to :user
    has_one :rating
    has_one :review
end
