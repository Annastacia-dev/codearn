class TemplateSerializer < ActiveModel::Serializer
  attributes :id, :image_url, :title, :description, :live_site, :features, :github_link, :category, :technologies, :premium, :price
  belongs_to :user
end