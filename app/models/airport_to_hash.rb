class AirportToHash
  def self.convert(aiports_from_active_record)
    aiports_from_active_record.each.with_object([]) do |airport, airports|
      updated_airport =
        {
          identifier: airport.identifier,
          airnav_url: airport.airnav_url,
          latitude: airport.latitude,
          longitude: airport.longitude,
          vfr_map: airport.vfr_map,
          airport_diagram: airport.airport_diagram,
          notam_link: airport.notam_link,
          runway_info: guard(airport.runway_info),
          airport_comms: guard(airport.airport_comms),
          airport_operations: guard(airport.airport_operations),
          vor: guard(airport.vor),
          non_directional_beacon: guard(airport.non_directional_beacon),
          airport_services: guard(airport.airport_services),
          airport_ownership: guard(airport.airport_ownership),
          airport_ops_stats: guard(airport.airport_ops_stats),
          additional_remarks: guard(airport.additional_remarks),
          nearby_airports_with_instrument_approaches: guard(airport.nearby_airports_with_instrument_approaches),
          other_pages: guard(airport.other_pages),
          where_to_stay: guard(airport.where_to_stay),
          aviation_businesses: guard(airport.aviation_businesses),
          aerial_photo: airport.aerial_photo
        }
      airports << updated_airport
    end
  end

  def self.guard(property)
    eval(property) if property
  end
end
