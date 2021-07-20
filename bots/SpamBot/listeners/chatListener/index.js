const config = require("../../config")

module.exports = socket => {
    socket.on(config.events.CHATS_ALL, chats => {
        config.chats = chats
        config.onlineUsers = chats.filter(chat => chat.user.online).map(chat => chat.user.userId)
    })

    socket.on(config.events.USER_NEW, chat => {
        config.chats.push(chat)
    })

    socket.on(config.events.USER_CONNECTED, ({userId}) => {
        config.onlineUsers.push(userId)
    })

    socket.on(config.events.USER_DISCONNECTED, ({userId}) => {
        config.onlineUsers.filter(id => id !== userId)
    })
}
