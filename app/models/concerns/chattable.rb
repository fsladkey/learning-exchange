module Chattable
  extend ActiveSupport::Concern

  included do
    has_many :chat_messages, as: :chattable, dependent: :destroy
  end

end
