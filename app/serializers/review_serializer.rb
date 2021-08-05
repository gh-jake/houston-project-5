class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :text, :show_id
  belongs_to :show
end
