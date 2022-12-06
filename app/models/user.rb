class User < ApplicationRecord

    validates :first_name, :username, :last_name, :email, :password, presence: true

    # first_name and last_name must be longer than 2 characters,
    validates :first_name, :last_name, length: { minimum: 2 }

    validates :username, uniqueness: true, length: { minimum: 2 }, format: { with: /\A[a-zA-Z0-9]+\z/, message: "only allows letters and numbers" }
    
    validates :email, uniqueness: true, format: { with: /\A[^@\s]+@([^@\s]+\.)+[^@\s]+\z/, message: "only allows valid emails" }
   
    validates :password, format: { with: /\A(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+\z/, message: "must contain one uppercase letter, one number, a special character, and be at least 6 characters long" }

    has_many :templates, dependent: :destroy
    has_many :reviews, dependent: :destroy
    

    # if user is a seller, validate presence of phone number
    # validates :phone_number, presence: true, if: :seller?

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
