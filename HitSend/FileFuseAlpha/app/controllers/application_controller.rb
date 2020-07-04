class ApplicationController < ActionController::Base
    helper_method :current_user # gets current logged in user, application wide
    def current_user
      if session[:user_id]
        @current_user ||= User.find(session[:user_id])
      else
        @current_user = nil
      end
    end
  end