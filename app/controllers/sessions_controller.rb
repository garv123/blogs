class SessionsController < ApplicationController
  def create
  	
  	user = User.find_by(email: params[:email].downcase)
    if user && user.authenticate(params[:password])
    	session[:user_id] = user.id
    	puts session[:user_id]

	else
  		render :json => {status:400,message:"User name or password wrong"}
  	end
  end
end
