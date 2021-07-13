module.exports = function (socket) {
    socket.on('userEvent', data => {
        console.log(`userEvent with ${JSON.stringify(data)} from ${socket.id}`)
    })
}