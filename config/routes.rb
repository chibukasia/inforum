Rails.application.routes.draw do
  resources :users
  resources :blogs
  resources :comments, only: [:create]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  post "/signup", to: "users#create"
  # resources :users, only: [:update, :delete, :index]


  # Defines the root path route ("/")
  # root "articles#index"

end
