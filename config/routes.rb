Rails.application.routes.draw do
  
  resources :users
  resources :user_trails
  resources :user_foods
  resources :user_lodgings
  resources :trails
  resources :foods
  resources :lodgings
  resources :users, only: [:create, :show]

  post "/signup", to: "users#create"
  post "/login", to: "sessions#login"
  delete '/logout', to: "sessions#logout"
  patch "/trails/:id", to: "trails#update"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
