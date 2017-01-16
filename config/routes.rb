Rails.application.routes.draw do
  root "static_pages#root"
  get "welcome", to: "static_pages#welcome"

  devise_for :users

  namespace :api, defaults: { format: 'json' } do
    resources :search, only: [:index]
    resources :messages, only: [:update, :delete]
    resources :groups, except: [:new, :edit]
    resources :events, except: [:new, :edit]
    resources :notifications, only: [:update]
    resources :direct_messages, only: [:index, :create]
    resources :chat_messages, only: [:index, :create]
    resources :comments, only: [:create]

    resources :users, only: [:show]

    resource :user, only: [:update, :destroy]

    resources :groups do
      resources :messages, only: [:create]
    end

    resources :events do
      resources :comments, only: [:create]
    end

    get "session/events", to: "events#current_user_events"
    get "session/groups", to: "groups#current_user_groups"
  end

  get "/*path", to: "static_pages#root"
end
