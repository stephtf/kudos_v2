class User < ApplicationRecord
  has_secure_password

  has_many :kudo

  validates :username, presence: true
end
