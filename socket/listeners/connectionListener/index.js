const {closeConnection, isUserActive} = require("../../../sessionStorage/activeUsers");
const {getAllUserPersonalChats} = require("../../../models/Chat");
const {events} = require("../../../config");

const connectionListener = io => {
    return async socket => {
        socket.emit(events.CONNECTED, {session: socket.sessionId, token: socket.token, user: socket.userId})

        await getAllUserPersonalChats(socket.userId)
            .then(chatList => {
                socket.emit(events.CHATS_ALL, chatList)
            })

        socket.on('disconnect', () => {
            const closeStatus = closeConnection({socketId: socket.id})
            if (closeStatus){
                if (!isUserActive({userId: socket.userId})) {
                    socket.broadcast.emit(events.USER_DISCONNECTED, {userId: socket.userId})
                    console.log(`user: ${socket.userId}\n\tdisconnected`)
                }else {
                    console.log(`user: ${socket.userId}\n\tclosed session`)
                }
            }else if (closeStatus !== null) {
                console.log(`user: ${socket.userId}\n\tclosed connection\n\t\ton socket: ${socket.id}`)
            }

        })
    }
}

module.exports = connectionListener