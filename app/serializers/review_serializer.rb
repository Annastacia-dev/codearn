class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :template_id, :comment, :rating, :user
  belongs_to :user
  belongs_to :template
end
