module Searchable
  extend ActiveSupport::Concern

  module ClassMethods

    def search(params, current_user)
      result = all
      result = query(params[:query]) if params[:query]
      origin = params[:zipcode] || current_user
      result = result.near(origin.to_s) if params[:zipcode]
      result.limit(params[:limit] || 5)
    end

    def query(query)
      field_queries = []
      fields_to_query.each do |field|
        field_queries << "LOWER(#{field}) LIKE :query"
      end
      where(field_queries.join(' OR '), query: "%#{query.downcase}%")
    end
 end

end
