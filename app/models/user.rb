class User < ApplicationRecord

    validates :first_name, :username, :last_name, :email, :password, presence: true

    validates :username, uniqueness: true
    
    validates :email, uniqueness: true
   
    validates :password, format: { with: /\A(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+\z/, message: "must contain one uppercase letter, one number, a special character, and be at least 6 characters long" }

    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP, message: "must be a valid email address" }
 
    has_secure_password
end
