class Api::UsersController < ApplicationController
  def index
    users = User.all()
    render json:users, status: 200
  end

  def show
    user = User.find_by(id: params[:id])
    if user 
      render json:user, status: 200
    else 
      render json: { error: "User not found!" }
    end
  end

  def new
    user = User.new
  end

  def create 
    user = User.new(user_params)
    if user.save 
      render json:user, status: 200
    else
      render json: { error: "Creating error"}
    end
  end

  def update 
    user = User.find_by(id: params[:id])
    if user 
      user.update(username: params[:username], password_digest: params[:password_digest])
      render json: "User updated successfully!" 
    else 
      render json: { error: "User not found" }
    end
  end

  def destroy 
    user = User.find_by(id: params[:id])
    if user 
      user.destroy
      render json: "User deleted successfully!"
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :password_confirmation)
  end
end
