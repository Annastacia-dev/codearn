class User < ApplicationRecord

    validates :first_name, :last_name, :email, :password, presence: true
    validates :email, uniqueness: true
   
    validates :password, length: { minimum: 6 }, format: { with: /\A(?=.*[a-zA-Z])(?=.*[0-9]).{6,}\z/, message: "must be at least 6 characters long, and must contain at least one letter and one number" }

    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP, message: "must be in a valid format" }
 
    has_secure_password
end
