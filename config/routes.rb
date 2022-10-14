Rails.application.routes.draw do
  resources :users
  resources :blogs
  resources :comments, only: [:create, :destroy, :index]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  # resources :users, only: [:update, :delete, :index]
  get "/me", to: "users#show"

  # Defines the root path route ("/")
  # root "articles#index"

end