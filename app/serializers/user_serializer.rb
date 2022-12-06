class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :username, :email, :premium, :seller, :profile_picture
  has_many :templates
  has_many :reviews
end