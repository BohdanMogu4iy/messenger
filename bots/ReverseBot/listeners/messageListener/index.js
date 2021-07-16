const config = require("../../config")

module.exports = socket => {
    socket.on(config.events.MESSAGE_GOT, ({from, to, content, time}) => {
        setTimeout(() => socket.emit(config.events.MESSAGE_SENT, {from: socket.userId, to, content: content.split('').reverse().join(''), time}),
            3000)
    })
}
