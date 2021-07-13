module.exports = io => {
    const setSocketListeners = require("../utils/setSocketListeners")
    io.on("connection", function (socket) {
        setSocketListeners(socket, __dirname)

        console.log(`user connected : ${socket.id}`)
        socket.emit('connected', {id: socket.id})
    })
}