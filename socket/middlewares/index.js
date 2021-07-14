const jsonwebtoken = require('jsonwebtoken')
const {createUser} = require('../../sessionStorage/allUsers')
const {findConnection, newConnection} = require('../../sessionStorage/activeUsers')
const {jwt} = require('../../config')

module.exports = {
    authMiddleware: (socket, next) => {
        const token = socket.handshake.auth.token;
        if (token && token.split(' ')[1]) {
            const decoded = jsonwebtoken.verify(token.split(' ')[1], jwt.SECRET);
            if (decoded){
                socket.token = token.split(' ')[1]
                const sessionId = socket.handshake.auth.session
                if (sessionId) {
                    const session = findConnection({userId: decoded.userId, sessionId})
                    if (session.length !== 0){
                        socket.userId = decoded.userId;
                        socket.sessionId = sessionId
                        // console.log("1 next :" + socket.sessionId + " " + socket.userId)
                        return next()
                    }
                }
                const session = newConnection({userId: decoded.userId})
                socket.userId = decoded.userId
                socket.sessionId = session.sessionId
                // console.log("2 next :" + socket.sessionId + " " + socket.userId)
                return next()
            }
        }
        socket.userId = createUser().userId
        socket.sessionId = newConnection({userId: socket.userId}).sessionId
        socket.token = jsonwebtoken.sign({userId: socket.userId}, jwt.SECRET)
        // console.log("3 next :" + socket.sessionId + " " + socket.userId)
        next()
    }
}