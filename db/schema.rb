# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150916182154) do

  create_table "airports", force: :cascade do |t|
    t.string   "identifier"
    t.string   "airnav_url"
    t.float    "latitude"
    t.float    "longitude"
    t.text     "vfr_map"
    t.text     "airport_diagram_pdf_link"
    t.text     "airport_diagram"
    t.text     "notam_link"
    t.text     "runway_info"
    t.text     "airport_comms"
    t.text     "airport_operations"
    t.text     "vor"
    t.text     "non_directional_beacon"
    t.text     "airport_services"
    t.text     "airport_ownership"
    t.text     "airport_ops_stats"
    t.text     "additional_remarks"
    t.text     "nearby_airports_with_instrument_approaches"
    t.text     "other_pages"
    t.text     "where_to_stay"
    t.text     "aviation_businesses"
    t.text     "aerial_photo"
    t.datetime "created_at",                                 null: false
    t.datetime "updated_at",                                 null: false
  end

end
