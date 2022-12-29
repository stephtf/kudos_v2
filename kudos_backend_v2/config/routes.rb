Rails.application.routes.draw do
  namespace :api do 
    resources :users, only:[:index, :show, :create, :update, :destroy]

    resources :kudos, only:[:index, :show, :create, :update, :destroy]
  end

  #having resources, like above, is a shorthand way of creating all of the routes below - you just need to create the corresponding methods for these in the controller
  # namespace :api do 
  #   get "/users", to: "users#index"
  #   get "/users/:id", to: "users#show"
  #   post "/users", to: "users#create"
  #   put "/users/:id", to: "users#update" 
  #   delete "/users/:id", to: "users#destroy" 
  # end

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")

end
