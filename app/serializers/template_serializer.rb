class TemplateSerializer < ActiveModel::Serializer
  attributes :id, :image_url, :title, :description, :live_site, :features, :github_link, :category, :technologies, :premium, :more_by_author
  belongs_to :user

  def more_by_author
    object.user.templates
  end



end
