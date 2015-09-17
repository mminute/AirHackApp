# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

require_relative '../lib/LinksFromHash'
require_relative '../lib/AirportURLS'

url_array = LinksFromHash.new(AllAirportUrls)
url_array.grab_links
links = url_array.all_links


files_found = Dir["lib/airport_files/*"]

links.each do |link|
  if link[-4] == "/"
    ident = link[-3..-1]
  else
    ident = link[-4..-1]
  end

  file_path = "lib/airport_files/"
  text_file = file_path + ident + ".txt"
  file_contents_string = IO.readlines( text_file )[0]
  info_hash = eval( file_contents_string )

  lat_long = info_hash[:location]["Lat/Long:"][-2].split(" / ").map{|str| str.to_f }

  # p file_contents_string
  # files_opened = files_opened + 1

  # p file_contents_string


  # def missing_location_data
  #   files_found = Dir[ file_path ]
  #   [].tap do |no_location|
  #     files_found.each do |path_and_file|
  #       reader = IO.readlines( path_and_file )[0]
  #       if !reader.include?(":location")
  #         no_location << path_and_file
  #       end
  #     end
  #   end
  # end


  Airport.create(identifier: ident, airnav_url: link, latitude: lat_long[0], longitude: lat_long[1] )
end