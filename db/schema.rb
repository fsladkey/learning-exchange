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

ActiveRecord::Schema.define(version: 20161024204506) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "events", force: :cascade do |t|
    t.string   "title",       null: false
    t.text     "description"
    t.integer  "group_id"
    t.integer  "creator_id",  null: false
    t.string   "state"
    t.string   "city"
    t.string   "zipcode"
    t.float    "latitude"
    t.float    "longitude"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["creator_id"], name: "index_events_on_creator_id", using: :btree
    t.index ["group_id"], name: "index_events_on_group_id", using: :btree
    t.index ["latitude"], name: "index_events_on_latitude", using: :btree
    t.index ["longitude"], name: "index_events_on_longitude", using: :btree
  end

  create_table "groups", force: :cascade do |t|
    t.string   "name",        null: false
    t.text     "description"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "invitations", force: :cascade do |t|
    t.integer  "event_id"
    t.integer  "inviter_id"
    t.integer  "invitee_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["event_id"], name: "index_invitations_on_event_id", using: :btree
    t.index ["invitee_id"], name: "index_invitations_on_invitee_id", using: :btree
    t.index ["inviter_id"], name: "index_invitations_on_inviter_id", using: :btree
  end

  create_table "memberships", force: :cascade do |t|
    t.integer  "member_id"
    t.integer  "group_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["group_id"], name: "index_memberships_on_group_id", using: :btree
    t.index ["member_id"], name: "index_memberships_on_member_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.string   "username",                            null: false
    t.string   "firstname"
    t.string   "lastname"
    t.string   "zipcode"
    t.float    "latitude",                            null: false
    t.float    "longitude",                           null: false
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
    t.index ["latitude"], name: "index_users_on_latitude", using: :btree
    t.index ["longitude"], name: "index_users_on_longitude", using: :btree
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree
    t.index ["username"], name: "index_users_on_username", unique: true, using: :btree
  end

end
