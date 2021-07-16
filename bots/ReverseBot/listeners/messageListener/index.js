const config = require("../../config")

module.exports = socket => {
    socket.on(config.events.MESSAGE_GOT, ({message}) => {
        setTimeout(() => socket.emit(config.events.MESSAGE_SENT, {from: socket.userId, to: message.to, content: message.content.split('').reverse().join(''), time: message.time}),
            3000)
    })
}
