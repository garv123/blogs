class UsersController < ApplicationController

  before_filter :restrict_access, only: [:show, :update, :destroy, :edit]
  def index

  end

  def show
    api_key = ApiKey.find_by_access_token(params[:id])

    if api_key == nil
      render :json => {status: 400,message:"Unauthorized"}
    else
      user_id= api_key['user_id']
      user = User.find(user_id)
      render :json => {:id =>user.id,:name=>user.name,:email=>user.email}
     end
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
    api_key = ApiKey.find_by_access_token(params[:id])
    if api_key == nil
      render :json => {status: 400,message:"Unauthorized"}
    else
      user_id= api_key['user_id']
      user = User.find(user_id)
      if user.update(name: params[:name],email: params[:email],password: params[:password])
        render :json => user
      else
      render :json => {status: 404, message: "Cant update"}
    end


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
    api_key = ApiKey.find_by_access_token(params[:id])
  end

end

