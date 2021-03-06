class SessionsController < ApplicationController
  def create 	
  	user = User.find_by(email: params[:email].downcase)
    if user && user.authenticate(params[:password])
    	api_key= ApiKey.create!
    	api_key.update(:user_id=>user.id)
    	render :json => {api_key:api_key[:access_token],name: user.name}

	else
  		render :json => {status:400,message:"User name or password wrong"}
  	end
  end

  def destroy
  	api_key = ApiKey.find_by_access_token(params[:id])
  	if api_key != nil
  		api_key.destroy
  		render :json => {status:200,message:"User has been log out"}
  	else
  		render :json => {status:400, message: "User error"}
  	end

  end
end
