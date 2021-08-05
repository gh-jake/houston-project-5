class Show < ApplicationRecord
    validates :imdb_id, uniqueness: {scope: :user_id}
    belongs_to :user
    has_one :rating, dependent: :destroy
    has_one :review, dependent: :destroy
    accepts_nested_attributes_for :rating, :review, allow_destroy: true
end
