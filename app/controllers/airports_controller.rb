class AirportsController < ApplicationController
  def index
    # binding.pry
    gon.airports = Airport.select([:id,:latitude, :longitude, :identifier])
    render 'index'
  end

  def show
    # binding.pry
    @airport = Airport.find(params['id'])
    
    respond_to do |format|
      format.html {render action: 'show'}
    end
  end
end
