class Show < ApplicationRecord
    validates :title, :start_year, :end_year, :seasons, :category, presence: true
    belongs_to :user
    belongs_to :list
    has_one :rating
end
