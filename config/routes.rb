Rails.application.routes.draw do
  resources :reviews
  post "/login", to: "sessions#create"
  delete "logout", to: "sessions#destroy"

  post "/signup", to: "users#create"
  get "/me", to: "users#show"

  # resources :ratings
  # resources :reviews
  resources :shows do
    resource :rating, :review
  end
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
