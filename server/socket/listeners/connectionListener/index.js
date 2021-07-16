const disconnectListeners = require("../disconnectListener");
const {messageSentListener} = require("../messageListener");
const {getAllUserPersonalChats} = require("../../../models/Chat");
const {events} = require("../../../config");

const connectionListener = io => {
    return async socket => {
        socket.emit(events.CONNECTED, {session: socket.sessionId, token: socket.token, user: socket.userId})
        await getAllUserPersonalChats(socket.userId)
            .then(chatList => {
                socket.emit(events.CHATS_ALL, chatList)
            })

        socket.on(events.MESSAGE_SENT, messageSentListener(io, socket))
        socket.on(events.DISCONNECT, disconnectListeners(socket))
    }
}

module.exports = connectionListener