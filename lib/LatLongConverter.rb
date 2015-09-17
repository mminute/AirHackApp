require 'pry'

class LatLongConverter
  attr_reader :raw_data
  def initialize(arr)
    @raw_data = arr
  end

  def degrees_minutes_seconds
    sought_format = raw_data.select do |datum|
      /\d+-\d+-\d+\.\d\d\d\d\w/.match( datum )
    end

    if sought_format.count > 0
      lat_long = sought_format[0].split(" / ")
    end

    # lat_long.map do |datum|
    #   deg_min_sec = datum.split("-")
    # end
    
  end

end

a = LatLongConverter.new(["14-12-57.9949S / 169-25-24.7775W", "14-12.966582S / 169-25.412958W", "-14.2161097 / -169.4235493", "(estimated)"])
p a.degrees_minutes_seconds