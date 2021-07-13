module.exports = function (socket) {
    socket.on('userEvent', data => {
        console.log(`userEvent with ${data} from ${socket.id}`)
    })
}