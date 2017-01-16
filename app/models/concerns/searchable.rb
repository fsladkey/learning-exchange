module Searchable
  extend ActiveSupport::Concern

  module ClassMethods

    def search(params)
      result = with_tags
      result = result.query(params[:query]) if params[:query]
      result = result.near(params[:origin].to_s) if params[:zipcode]
      result.limit(params[:limit] || 5)
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
