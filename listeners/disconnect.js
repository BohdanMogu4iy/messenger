module.exports = function (socket) {
    socket.on('disconnect', () => {
        console.log(`user disconnected : ${socket.id}`)
    })
}