class Template < ApplicationRecord
    validates :image_url, :title, :description, :live_site, :features, :github_link, :category, :technologies, presence: true
   
    validates :category, inclusion: { in: %w(Card Dashboard Landing\ Page Navigation Form Table Header Footer Widget), message: "%{value} is not a valid category" }
  
    validates :technologies, inclusion: { in: %w(HTML React Vue Angular), message: "%{value} is not a valid technology" }
  
    validates :github_link, uniqueness: true, format: { with: /\Ahttps:\/\/github.com\/[a-zA-Z0-9_-]+\/[a-zA-Z0-9_-]+\z/, message: "must be a valid github link" }
  
    validates :live_site, uniqueness: true, format: { with: /\Ahttps?:\/\/[\S]+\z/, message: "must be a valid url" }

end
