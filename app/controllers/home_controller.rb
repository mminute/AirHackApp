class HomeController < ApplicationController

  def show
    gon.airports = Airport.select([:latitude, :longitude, :identifier])
    render 'welcome_page'
  end

end