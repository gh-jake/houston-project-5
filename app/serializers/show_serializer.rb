class ShowSerializer < ActiveModel::Serializer
  attributes :id, :title, :start_year, :end_year, :seasons, :category, :description, :list_id, :user_id
end
