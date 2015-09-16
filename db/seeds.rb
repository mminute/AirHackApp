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

links.each do |link|
  if link[-4] == "/"
    ident = link[-3..-1]
  else
    ident = link[-4..-1]
  end
  Airport.create(identifier: ident, airnav_url: link )
end

