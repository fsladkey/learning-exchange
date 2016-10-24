class Tag < ApplicationRecord
  validates :name, presence: true

  has_many :taggings
  has_many :tagged_objects, through: :taggings, source: :taggable
end
