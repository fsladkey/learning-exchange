class StaticPagesController < ApplicationController
  before_action :redirect_if_logged_in, only: :welcome
  before_action :redirect_unless_logged_in, only: :root

  def root
  end

  def welcome
  end

end
