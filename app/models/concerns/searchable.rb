module Searchable
  extend ActiveSupport::Concern

  module ClassMethods

    def search(params)
      ids = Rails.cache.fetch("#{table_name}-#{params.to_json}", expires_in: 1.minute) do
        result = with_tags
        result = result.query(params[:query]) if params[:query]
        origin = params[:origin]
        result = result.near(origin.to_s) if params[:zipcode]
        result.limit(params[:limit] || 5).pluck(:id)
      end
      find(ids)
    end

    def query(query)
      field_queries = ["STRING_AGG(tags.name, ', ') LIKE :query"]
      fields_to_query.each do |field|
        field_queries << "LOWER(#{table_name}.#{field}) LIKE :query"
      end
      having_clause = sanitize_sql_for_assignment([
        field_queries.join(' OR '),
        query: "%#{query.downcase}%"
      ])
      having(having_clause)
    end
 end

end
