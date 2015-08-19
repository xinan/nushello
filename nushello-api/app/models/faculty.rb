class Faculty < ActiveRecord::Base
  has_many :majors
  has_many :users, through: :majors, source: :home_users

  validates :name, presence: true, uniqueness: true
end