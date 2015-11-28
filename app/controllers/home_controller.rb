class HomeController < ApplicationController

  def show
    # binding.pry
    gon.airports = AirportToHash.convert(Airport.all)
    render 'welcome_page'
  end

end