const {events} = require("../../../config");
const {isUserActive} = require("../../../sessionStorage/activeUsers");
const {closeConnection} = require("../../../sessionStorage/activeUsers");

const disconnectListeners = socket => {
    return async () => {
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
    }
}

module.exports = disconnectListeners