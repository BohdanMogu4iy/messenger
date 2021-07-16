const jsonwebtoken = require('jsonwebtoken')
const {updateUserLastSeen} = require("../../models/User");
const {chatSerializer} = require("../../serializers");
const {getUsersPersonalChat} = require("../../models/Chat");
const {mockUser} = require("../../utils");
const {createUser} = require('../../models/User')
const {findSession, newSession, newConnection, isUserActive} = require('../../sessionStorage/activeUsers')
const {jwt, events} = require('../../config')

module.exports = {
    jwtMiddleware: io => async (socket, next) => {
        const token = socket.handshake.auth.token;
        if (token && token.split(' ')[1]) {
            const decoded = jsonwebtoken.verify(token.split(' ')[1], jwt.SECRET);
            if (decoded) {
                socket.token = token.split(' ')[1]
                socket.userId = decoded.userId
                return next()
            }
        }
        socket.userStatus = 0
        next()
    },
    sessionMiddleware: io => async (socket, next) => {
        if (socket.userStatus === 0) return next()
        const sessionId = socket.handshake.auth.session
        if (sessionId) {
            const session = findSession({userId: socket.userId, sessionId})
            if (session.length > 0) {
                if (newConnection({userId: socket.userId, sessionId, socketId: socket.id})) {
                    socket.sessionId = sessionId
                    socket.userStatus = 1
                    return next()
                }
            }
        }
        if (isUserActive({userId: socket.userId})) {
            socket.userStatus = 2
        } else socket.userStatus = 3
        socket.sessionId = newSession({userId: socket.userId, socketId: socket.id}).sessionId
        next()
    },
    userMiddleware: io => async (socket, next) => {
        switch (socket.userStatus) {
            case 0:
                await mockUser()
                    .then(user => {
                        return createUser(user)
                    })
                    .then(createdUser => {
                        socket.userId = createdUser.id
                        socket.sessionId = newSession({userId: socket.userId, socketId: socket.id}).sessionId
                        socket.token = jsonwebtoken.sign({userId: socket.userId}, jwt.SECRET)
                    })
                    .then(() => {
                        return Array.from(io.sockets.sockets)
                            .map(socketObject => socketObject[1])
                            .filter(receiverSocket => receiverSocket.userId !== socket.userId)
                            .map(receiverSocket =>
                                getUsersPersonalChat([socket.userId, receiverSocket.userId], chatSerializer)
                                    .then(chat => {
                                        console.log(chat)
                                        receiverSocket.emit(events.USER_NEW, chat)
                                    })
                            )
                    })
                    .then(promiseList => {
                        return Promise.all(promiseList)
                    })
                    .catch(err => {
                        console.error(err)
                    })
                return next()
            case 1:
                updateUserLastSeen({userId: socket.userId, lastSeen: Date.now()}).then(
                    lastSeen => {
                        socket.broadcast.emit(events.USER_CONNECTED, {userId: socket.userId, lastSeen: lastSeen})
                    }
                )
                return next()
            case 2:
                updateUserLastSeen({userId: socket.userId, lastSeen: Date.now()}).then(
                    lastSeen => {
                        socket.broadcast.emit(events.USER_CONNECTED, {userId: socket.userId, lastSeen: lastSeen})
                    }
                )
                return next()
            case 3:
                updateUserLastSeen({userId: socket.userId, lastSeen: Date.now()}).then(
                    lastSeen => {
                        socket.broadcast.emit(events.USER_CONNECTED, {userId: socket.userId, lastSeen: lastSeen})
                    }
                )
                return next()
            default:
                return next()
        }
    },
    logMiddleware: io => (socket, next) => {
        switch (socket.userStatus) {
            case 0:
                console.log(`new user: ${socket.userId}`)
                break
            case 1:
                console.log(`user: ${socket.userId}\n\tcreated CONNECTION\n\t\ton socket: ${socket.id}`)
                break
            case 2:
                console.log(`user: ${socket.userId}\n\tcreated SESSION: ${socket.sessionId}\n\t\ton socket: ${socket.id}`)
                break
            case 3:
                console.log(`user: ${socket.userId}\n\tconnected`)
                break
        }
        return next()
    }
}