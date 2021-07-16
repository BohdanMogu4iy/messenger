const config = require("../../config")

module.exports = socket => {
    socket.on(config.events.MESSAGE_GOT, ({from, to, content, time}) => {
        socket.emit(config.events.MESSAGE_SENT, {from: socket.userId, to, content, time})
    })
}
