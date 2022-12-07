class Mpesa < ApplicationRecord

    validates :phone_number, presence: true, length: { is: 10 }, numericality: { only_integer: true }, format: { with: /\A2547\d{8}\z/ }

end
