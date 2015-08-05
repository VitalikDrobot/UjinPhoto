class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  before_filter :strip_www

  def strip_www
    if request.env["HTTP_HOST"] == "www.ujinphoto.ck.ua"
      redirect_to "http://ujinphoto.ck.ua/"
    end
  end
end
