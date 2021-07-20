const config = require("../../config")

module.exports = socket => {
    socket.on(config.events.MESSAGE_GOT, ({message}) => {
        socket.emit(config.events.MESSAGE_SENT,
            {
                from: socket.userId,
                to: message.to,
                content: message.content,
                time: message.time
            })
    })
}
