Rails.application.routes.draw do
  resources :templates
  # get 'password_resets/new'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  # Defines the root path route ("/")
  # root "articles#index"
  root "application#index"

  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/profile", to: "users#profile"

  resources :password_resets, only: [:create, :update]

end
