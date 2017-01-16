class Api::SearchController < Api::ApiController
  def index
    # TODO debug caching
    # result = Rails.cache.fetch("params=#{search_params.to_json}", expires_in: 1.minute) do
    #   ApplicationRecord.search_all(search_params).map(&:to_a)
    # end
    @events, @groups, @users = ApplicationRecord.search_all(search_params)
  end

  private
  def search_params
    params[:origin] ||= current_user
    params.permit(:query, :origin)
  end
end
