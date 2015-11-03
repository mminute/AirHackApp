class CreateAirports < ActiveRecord::Migration
  def change
    create_table :airports do |t|
      t.string :identifier
      t.string :airnav_url
      t.float  :latitude
      t.float  :longitude
      t.text :vfr_map, default: nil
      t.text :airport_diagram_pdf_link, default: nil
      t.text :airport_diagram, default: nil
      t.text :notam_link, default: nil
      t.text :runway_info, default: nil
      t.text :airport_comms, default: nil
      t.text :airport_operations, default: nil
      t.text :vor, default: nil
      t.text :non_directional_beacon, default: nil
      t.text :airport_services, default: nil
      t.text :airport_ownership, default: nil
      t.text :airport_ops_stats, default: nil
      t.text :additional_remarks, default: nil
      t.text :nearby_airports_with_instrument_approaches, default: nil
      t.text :other_pages, default: nil
      t.text :where_to_stay, default: nil
      t.text :aviation_businesses, default: nil
      t.text :aerial_photo, default: nil
      t.timestamps null: false
    end
  end
end