class Api::KudosController < ApplicationController
  def index
    kudos = Kudo.all
    render json:kudos, status: 200
  end

  def kudos_by_user_id
    kudos = Kudo.all
    render json:kudos, status: 200
  end

  def show
    kudo = Kudo.find_by(id: params[:id])
    if kudo 
      render json:kudo, status: 200
    else 
      render json: { error: "Kudo not found!" }
    end
  end

  def new
    kudo = Kudo.new
  end

  def create 
    kudo = Kudo.new(kudo_params)
    if kudo.save! 
      render json:kudo, status: 200
    else
      render json: { error: "Error creating kudo"}
    end
  end

  def update 
    kudo = Kudo.find_by(id: params[:id])
    if kudo 
      Kudo.update(kudo_params)
      render json: "kudo updated successfully!" 
    else 
      render json: { error: "kudo not found" }
    end
  end

  def destroy 
    kudo = kudo.find_by(id: params[:id])
    if kudo 
      kudo.destroy
      render json: "kudo deleted successfully!"
    end
  end

  private

  def kudo_params
    params.require(:kudo).permit(:date, :text, :category, :img_url, :gif_url, :personal_notes, :user_id)
  end
end
