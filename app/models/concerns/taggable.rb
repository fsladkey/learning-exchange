module Taggable
  extend ActiveSupport::Concern
  # TODO: handle null tag_names
  included do
    has_many :taggings, as: :taggable
    has_many :tags, through: :taggings
    scope :with_tags, -> {
      left_joins(:tags).group(:id).select(<<-SQL)
        #{table_name}.*, STRING_AGG(tags.name, ', ') AS tag_names
      SQL
    }
  end

  def tag_names
    attributes["tag_names"] || nil
    attributes["tag_names"] || nil
  end

end
