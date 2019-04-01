'use strict'

class ChatController {
  constructor ({ socket, request }) {
    this.socket = socket
    this.request = request
  }

  onMessage (message) {
    this.socket.broadcastToAll('message', message)
    // this.socket
  }

  onClose () {
    // same as: socket.on('close')
    // this.socket.Close();
  }

  onError () {
    // same as: socket.on('error')
  }
}

module.exports = ChatController
