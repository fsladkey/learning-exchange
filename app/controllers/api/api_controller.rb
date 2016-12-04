class Api::ApiController < ApplicationController
  before_action :reject_unauthorized_request
  before_action :set_default_response_format

  private
  def reject_unauthorized_request
    unless user_signed_in?
      render json: ["You must be logged in to do that"], status: 401
    end
  end

  def set_default_response_format
    request.format = :json
  end
end
