const {events} = require("../../config");
const {authMiddleware} = require("../middlewares");

module.exports = io => {
    io.use(authMiddleware)
    io.on("connection", function (socket) {
        console.log(`user ${socket.userId} connected\n via session ${socket.sessionId}\n via socket ${socket.id}`)
        socket.emit(events.SESSION_NEW, {session: socket.sessionId, token: socket.token})
        socket.on('disconnect', () => {
            console.log(`user disconnected\n via socket ${socket.id}`)
        })
    })
}