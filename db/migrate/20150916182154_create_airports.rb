class CreateAirports < ActiveRecord::Migration
  def change
    create_table :airports do |t|
      t.string :identifier
      t.string :airnav_url
      t.float  :latitude
      t.float  :longitude
      t.string :vfr_map, default: nil
      t.string :airport_diagram_pdf_link, default: nil
      t.string :airport_diagram, default: nil
      t.string :notam_link, default: nil
      t.string :runway_info, default: nil
      t.string :airport_comms, default: nil
      t.string :airport_operations, default: nil
      t.string :vor, default: nil
      t.string :non_directional_beacon, default: nil
      t.string :airport_services, default: nil
      t.string :airport_ownership, default: nil
      t.string :airport_ops_stats, default: nil
      t.string :additional_remarks, default: nil
      t.string :nearby_airports_with_instrument_approaches, default: nil
      t.string :other_pages, default: nil
      t.string :where_to_stay, default: nil
      t.string :aviation_businesses, default: nil
      t.string :aerial_photo, default: nil
      t.timestamps null: false
    end
  end
end