class CreateAirports < ActiveRecord::Migration
  def change
    create_table :airports do |t|
      t.string :identifier
      t.string :airnav_url
      t.timestamps null: false
    end
  end
end