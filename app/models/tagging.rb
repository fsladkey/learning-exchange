class Tagging < ApplicationRecord
  validates :tag, presence: true

  belongs_to :tag
  belongs_to :taggable, polymorphic: true
end
