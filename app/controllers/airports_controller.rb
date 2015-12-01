class AirportsController < ApplicationController
  def index
    # binding.pry
    gon.airports = Airport.select([:id,:latitude, :longitude, :identifier])
    render 'index'
  end

  def show
    @airport = Airport.find_by(identifier: params['id'])
    render 'show'
  end
end
