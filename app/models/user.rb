class User < ApplicationRecord

    validates :first_name, :username, :last_name, :email, :password, presence: true

    validates :username, uniqueness: true
    
    validates :email, uniqueness: true
   
    validates :password, format: { with: /\A(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+\z/, message: "must contain one uppercase letter, one number, a special character, and be at least 6 characters long" }

    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP, message: "must be a valid email address" }
 
    has_secure_password

    before_create { generate_token(:auth_token) }


    def send_password_reset
        generate_token(:password_reset_token)
        self.password_reset_sent_at = Time.zone.now
        save!
        UserMailer.password_reset(self).deliver
    end



    def generate_token(column)
        begin
            self[column] = SecureRandom.urlsafe_base64
        end while User.exists?(column => self[column])
    end

end
