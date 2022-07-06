# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_07_05_152134) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "foods", force: :cascade do |t|
    t.string "name"
    t.string "address"
    t.string "website"
    t.string "pictures", default: [], array: true
    t.string "proximity"
    t.integer "upvote", default: 0
    t.integer "downvote", default: 0
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "food_type"
    t.string "description"
    t.string "latitude"
    t.string "longitude"
  end

  create_table "lodgings", force: :cascade do |t|
    t.string "name"
    t.string "address"
    t.string "website"
    t.string "proximity"
    t.string "lodging_amenity", default: [], array: true
    t.string "room_amenity", default: [], array: true
    t.integer "upvote", default: 0
    t.integer "downvote", default: 0
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "image"
  end

  create_table "trails", force: :cascade do |t|
    t.string "name"
    t.string "location"
    t.string "proximity"
    t.float "mileage"
    t.float "elevation_gain"
    t.float "starting_elevation"
    t.string "route_type"
    t.string "difficulty"
    t.string "estimated_time"
    t.string "pictures", default: [], array: true
    t.integer "food", default: 0
    t.integer "water", default: 0
    t.integer "upvote", default: 0
    t.integer "downvote", default: 0
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.float "starting_lat"
    t.float "starting_long"
    t.float "ending_lat"
    t.float "ending_long"
    t.boolean "permit?", default: false
  end

  create_table "user_foods", force: :cascade do |t|
    t.integer "user_id"
    t.integer "food_id"
    t.boolean "upvote?", default: false
    t.boolean "downvote?", default: false
    t.boolean "favorite?", default: false
    t.string "review"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "user_lodgings", force: :cascade do |t|
    t.integer "user_id"
    t.integer "lodging_id"
    t.boolean "upvote?", default: false
    t.boolean "downvote?", default: false
    t.boolean "favorite?", default: false
    t.string "review"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "user_trails", force: :cascade do |t|
    t.integer "user_id"
    t.integer "trail_id"
    t.boolean "upvote?", default: false
    t.boolean "downvote?", default: false
    t.boolean "favorite?", default: false
    t.string "review"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "password_digest"
    t.string "name"
    t.boolean "elite", default: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "email"
    t.string "password_confirmation"
  end

end
