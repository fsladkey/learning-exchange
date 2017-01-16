module.exports = function subscribe(id, channel, received) {
  return App.cable.subscriptions.create({ channel, id },  {
    connected() {
    },
    disconnected() {
    },
    received
  })
}
