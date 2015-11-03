class HomeController < ApplicationController

  def show
    gon.airports = Airport.all
    render 'welcome_page'
  end

end