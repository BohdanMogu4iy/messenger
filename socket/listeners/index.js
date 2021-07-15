const {jwtMiddleware, sessionMiddleware,  userMiddleware, logMiddleware} = require("../middlewares");
const registerConnectionListener = require("./connectionListener")

module.exports = io => {
    io.use(jwtMiddleware(io))
    io.use(sessionMiddleware(io))
    io.use(userMiddleware(io))
    io.use(logMiddleware(io))
    io.on("connection", registerConnectionListener(io))
}