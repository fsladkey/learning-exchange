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

ActiveRecord::Schema.define(version: 20170615004621) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "attendances", force: :cascade do |t|
    t.integer  "event_id",   null: false
    t.integer  "user_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["event_id"], name: "index_attendances_on_event_id", using: :btree
    t.index ["user_id"], name: "index_attendances_on_user_id", using: :btree
  end

  create_table "chat_messages", force: :cascade do |t|
    t.integer  "sender_id",      null: false
    t.integer  "chattable_id",   null: false
    t.string   "chattable_type", null: false
    t.string   "body",           null: false
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
    t.index ["chattable_id"], name: "index_chat_messages_on_chattable_id", using: :btree
    t.index ["chattable_type"], name: "index_chat_messages_on_chattable_type", using: :btree
    t.index ["sender_id"], name: "index_chat_messages_on_sender_id", using: :btree
  end

  create_table "comments", force: :cascade do |t|
    t.text     "body"
    t.integer  "author_id"
    t.boolean  "deleted",          default: false
    t.string   "commentable_type"
    t.integer  "commentable_id"
    t.datetime "created_at",                       null: false
    t.datetime "updated_at",                       null: false
    t.index ["author_id"], name: "index_comments_on_author_id", using: :btree
    t.index ["commentable_type", "commentable_id"], name: "index_comments_on_commentable_type_and_commentable_id", using: :btree
  end

  create_table "conversations", force: :cascade do |t|
    t.integer  "user_1_id"
    t.integer  "user_2_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_1_id", "user_2_id"], name: "index_conversations_on_user_1_id_and_user_2_id", unique: true, using: :btree
    t.index ["user_2_id"], name: "index_conversations_on_user_2_id", using: :btree
  end

  create_table "direct_messages", force: :cascade do |t|
    t.integer  "sender_id",                       null: false
    t.integer  "receiver_id",                     null: false
    t.text     "body",                            null: false
    t.datetime "created_at",                      null: false
    t.datetime "updated_at",                      null: false
    t.boolean  "seen",            default: false
    t.integer  "conversation_id"
    t.index ["receiver_id"], name: "index_direct_messages_on_receiver_id", using: :btree
    t.index ["sender_id"], name: "index_direct_messages_on_sender_id", using: :btree
  end

  create_table "events", force: :cascade do |t|
    t.string   "name",        null: false
    t.text     "description"
    t.integer  "group_id"
    t.integer  "creator_id",  null: false
    t.string   "address"
    t.float    "latitude"
    t.float    "longitude"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.datetime "start"
    t.datetime "end"
    t.index ["creator_id"], name: "index_events_on_creator_id", using: :btree
    t.index ["group_id"], name: "index_events_on_group_id", using: :btree
    t.index ["latitude"], name: "index_events_on_latitude", using: :btree
    t.index ["longitude"], name: "index_events_on_longitude", using: :btree
  end

  create_table "follows", force: :cascade do |t|
    t.integer  "followed_user_id",  null: false
    t.integer  "following_user_id", null: false
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
    t.index ["followed_user_id"], name: "index_follows_on_followed_user_id", using: :btree
    t.index ["following_user_id"], name: "index_follows_on_following_user_id", using: :btree
  end

  create_table "groups", force: :cascade do |t|
    t.string   "name",        null: false
    t.text     "description"
    t.string   "zipcode",     null: false
    t.float    "latitude"
    t.float    "longitude"
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

  create_table "notifications", force: :cascade do |t|
    t.integer  "user_id",                         null: false
    t.integer  "notifiable_id",                   null: false
    t.string   "notifiable_type",                 null: false
    t.boolean  "seen",            default: false
    t.datetime "created_at",                      null: false
    t.datetime "updated_at",                      null: false
    t.index ["notifiable_id"], name: "index_notifications_on_notifiable_id", using: :btree
    t.index ["notifiable_type"], name: "index_notifications_on_notifiable_type", using: :btree
    t.index ["user_id"], name: "index_notifications_on_user_id", using: :btree
  end

  create_table "taggings", force: :cascade do |t|
    t.integer  "tag_id",        null: false
    t.string   "taggable_type"
    t.integer  "taggable_id"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.index ["tag_id"], name: "index_taggings_on_tag_id", using: :btree
    t.index ["taggable_type", "taggable_id"], name: "index_taggings_on_taggable_type_and_taggable_id", using: :btree
  end

  create_table "tags", force: :cascade do |t|
    t.string   "name",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_tags_on_name", unique: true, using: :btree
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
    t.float    "latitude"
    t.float    "longitude"
    t.string   "provider"
    t.string   "uid"
    t.string   "avatar_file_name"
    t.string   "avatar_content_type"
    t.integer  "avatar_file_size"
    t.datetime "avatar_updated_at"
    t.string   "middlename"
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
    t.index ["latitude"], name: "index_users_on_latitude", using: :btree
    t.index ["longitude"], name: "index_users_on_longitude", using: :btree
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree
    t.index ["username"], name: "index_users_on_username", unique: true, using: :btree
  end

end
