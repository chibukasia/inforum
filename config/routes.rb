Rails.application.routes.draw do
  resources :users
  resources :blogs
  resources :comments
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  post "/signup", to: "users#create"
  # resources :users, only: [:update, :delete, :index]
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/me", to: "users#show"

  # Defines the root path route ("/")
  # root "articles#index"

end
