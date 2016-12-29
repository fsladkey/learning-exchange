class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true

  def self.search_all(params)
    [
      Event.search(params),
      Group.search(params),
      User.search(params)
    ]
  end
end
