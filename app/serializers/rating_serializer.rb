class RatingSerializer < ActiveModel::Serializer
  attributes :id, :stars, :show_id
  belongs_to :show
end
