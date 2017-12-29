Rails.application.routes.draw do
  root "static_pages#root"
  get "welcome", to: "static_pages#welcome"

  devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks" }

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:show]
    resources :search, only: [:index]
    resources :messages, only: [:update, :destroy]
    resources :groups, except: [:new, :edit]
    resources :events, except: [:new, :edit]
    resources :notifications, only: [:update, :destroy]
    resources :direct_messages, only: [:index, :create]
    resources :chat_messages, only: [:index, :create]
    resources :comments, only: [:create]
    resources :attendances, only: [:create, :destroy]
    resources :memberships, only: [:update]
    resources :conversations, only: [:show, :index, :create, :update], param: :username, constraints: { username: /[^\/]+/ }

    resources :users, only: [:show], param: :username, constraints: { username: /[^\/]+/ }
    resources :users, only: [:update]

    get "session/events", to: "events#current_user_events"
    get "session/groups", to: "groups#current_user_groups"
  end

  get "/*path", to: "static_pages#root"
end