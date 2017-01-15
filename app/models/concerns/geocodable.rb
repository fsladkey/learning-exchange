module Geocodable
  extend ActiveSupport::Concern

  included do
    before_validation(
      :geocode,
      if: -> (obj) {
        obj.send(obj.locator).present? and obj.send("#{obj.locator}_changed?")
      }
    )
    geocoded_by :location
    acts_as_mappable(
      default_units: :miles,
      lat_column_name: :latitude,
      lng_column_name: :longitude
    )
  end

  def locator
    :zipcode
  end

  def location
    send(locator)
  end

  def lat
    latitude
  end

  def lng
    longitude
  end

end
