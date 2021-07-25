class RatingSerializer < ActiveModel::Serializer
  attributes :id, :stars, :show_id
end
