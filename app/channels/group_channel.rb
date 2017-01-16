# Be sure to restart your server when you modify this file. Action Cable runs in a loop that does not support auto reloading.
class GroupChannel < ApplicationCable::Channel
  def subscribed
    stream_from("Group_#{params[:id]}")
  end
end
