require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module LearningExchange
  class Application < Rails::Application
    config.cache_store = :redis_store, "redis://localhost:6379/0/cache"
    config.action_dispatch.perform_deep_munge = false
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.
    config.autoload_paths += %W(#{config.root}/lib)
  end
end
