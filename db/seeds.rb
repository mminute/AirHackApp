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

  Airport.create( identifier: ident, airnav_url: link, latitude: lat_long[0],
    longitude: lat_long[1], vfr_map: info_hash[:vfr_map], airport_diagram: info_hash[:airport_diagram],
    airport_diagram_pdf_link: info_hash[:airport_diagram_pdf_link],notam_link: info_hash[:notam_link],
    runway_info: info_hash[:runway_info], airport_comms: info_hash[:airport_comms],airport_operations: info_hash[:airport_operations],
    vor: info_hash[:vor], non_directional_beacon: info_hash[:non_directional_beacon],
    airport_services: info_hash[:airport_services], airport_ownership: info_hash[:airport_ownership],
    airport_ops_stats: info_hash[:airport_ops_stats],additional_remarks: info_hash[:additional_remarks],
    nearby_airports_with_instrument_approaches: info_hash[:nearby_airports_with_instrument_approaches],
    other_pages: info_hash[:other_pages], where_to_stay: info_hash[:where_to_stay],
    aviation_businesses: info_hash[:aviation_businesses], aerial_photo: info_hash[:aerial_photo] )
end

 # InfoGrabberMethods = [ :airport_diagram,
 # :sunrise_sunset, :current_date_and_time, :metar, :taf,
 # :instrument_procedures,
 # :fixed_base_operators ]