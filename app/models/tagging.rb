# == Schema Information
#
# Table name: taggings
#
#  id            :integer          not null, primary key
#  tag_id        :integer          not null
#  taggable_type :string
#  taggable_id   :integer
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Tagging < ApplicationRecord
  validates :tag, presence: true

  belongs_to :tag
  belongs_to :taggable, polymorphic: true
end
