class Template < ApplicationRecord
    validates :image_url, :title, :description, :live_site, :features, :category, :technologies, presence: true
  
    validates :premium, inclusion: { in: [true, false] }
  
    validates :github_link, uniqueness: true, format: { with: /\Ahttps:\/\/github.com\/[a-zA-Z0-9_-]+\/[a-zA-Z0-9_-]+\z/, message: "must be a valid github link" }, allow_blank: true
  
    validates :live_site, uniqueness: true, format: { with: /\Ahttps?:\/\/[\S]+\z/, message: "must be a valid url" }

    belongs_to :user

    has_many :reviews, dependent: :destroy

end
