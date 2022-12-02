class Template < ApplicationRecord
    validates :image_url, :title, :description, :live_site, :features, :category, :technologies, presence: true
   
    # validates :category, inclusion: { in: %w(Card Dashboard Landing\ Page Navigation Form Table Header Footer Widget), message: "%{value} is not a valid category" }
  
    # validates :technologies, inclusion: { in: %w(HTML CSS JavaScript  Material\ UI React Tailwind Bootstrap Vue Angular), message: "%{value} is not a valid technology" }

    validates :premium, inclusion: { in: [true, false] }
  
    validates :github_link, uniqueness: true, format: { with: /\Ahttps:\/\/github.com\/[a-zA-Z0-9_-]+\/[a-zA-Z0-9_-]+\z/, message: "must be a valid github link" }, allow_blank: true
  
    validates :live_site, uniqueness: true, format: { with: /\Ahttps?:\/\/[\S]+\z/, message: "must be a valid url" }

end
