class UsersController < ApplicationController

  before_filter :restrict_access, only: [:show, :update, :destroy, :edit]
  def index

  end

  def show
  end

  def create
    
    user=User.new(name: params[:name],email: params[:email],password:params[:password],password_confirmation:params[:password_confirmation])
    if user.save
      render :json => user
    else
      render :json => {response:400,body:user.errors.full_messages}
    end
  end

  def update
  end

  def delete
  end

  def destroy
  end

  def edit
  end

  private
  def user_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation)
  end

  def restrict_access
    api_key = ApiKey.find_by_access_token(params[:access_token])
    head :unauthorized unless api_key
  end
end

