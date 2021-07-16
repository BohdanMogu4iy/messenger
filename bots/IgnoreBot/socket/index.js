const io = require("socket.io-client");
const config = require('../config')
const listeners = require('../listeners')

const socketConn = io(config.URL, config.ops);
listeners(socketConn)

module.exports = {
    socket: socketConn,
    connect: socket => {
        socket.connect()
    }
}

