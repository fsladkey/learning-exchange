module Notifiable
  extend ActiveSupport::Concern

  included do
    after_create :notify
    has_many :notifications, as: :notifiable
  end

  def notify
    notifications.create!(user: user_to_notify)
  end

end
