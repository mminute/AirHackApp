class CreateAirports < ActiveRecord::Migration
  def change
    create_table :airports do |t|
      t.string :identifier
      t.string :airnav_url
      t.float  :latitude
      t.float  :longitude
      t.string :vfr_map, default: nil
      t.string :airport_diagram_pdf_link
      t.string :airport_diagram
      t.string :notam_link
      t.string :runway_info
      t.string :airport_comms
      t.string :airport_operations
      t.string :vor
      t.string :non_directional_beacon
      t.string :airport_services
      t.string :airport_ownership
      t.string :airport_ops_stats
      t.string :additional_remarks
      t.string :nearby_airports_with_instrument_approaches
      t.string :other_pages
      t.string :where_to_stay
      t.string :aviation_businesses
      t.string :aerial_photo
      t.timestamps null: false
    end
  end
end