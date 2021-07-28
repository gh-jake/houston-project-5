class ShowSerializer < ActiveModel::Serializer
  attributes :id, :title, :years, :rated, :seasons, :genres, :plot, :imdb_rating, :watched, :user_id
end
