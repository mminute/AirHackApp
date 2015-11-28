class AirportsController < ApplicationController
  def show
    airport = Airport.find_by(identifier: params['identifier'])
  end
end
