Rails.application.routes.draw do
  root "static_pages#root"
  get "welcome", to: "static_pages#welcome"

  devise_for :users

  namespace :api, defaults: { format: :json } do
    resources :search, only: [:index]
    resources :messages, only: [:update, :delete]
    resources :groups, expect: [:new, :edit]
    resources :events, expect: [:new, :edit]
    resources :notifications, only: [:update]

    resource :users do
      resources :messages, only: [:create]
    end

    resource :groups do
      resources :messages, only: [:create]
    end

    resource :events do
      resources :comments, only: [:create]
    end

    get "session/events", to: "events#current_user_events"
    get "session/groups", to: "groups#current_user_groups"
  end

end
