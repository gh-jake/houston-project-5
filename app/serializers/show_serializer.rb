class ShowSerializer < ActiveModel::Serializer
  attributes :id, :title, :years, :rated, :seasons, :genres, :plot, :imdb_rating, :watched, :user_id
  has_one :rating
  has_one :review
end
