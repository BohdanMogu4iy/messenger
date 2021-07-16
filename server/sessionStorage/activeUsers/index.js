const uuidv4 = require("uuid").v4

let activeUsers = []

const newSession = ({userId, socketId}) => {
    const newSession= {
        userId,
        sessionId: uuidv4(),
        sockets: [socketId]
    }
    activeUsers.push(newSession)
    return newSession
}

const findSession = ({userId, sessionId}) => {
    return activeUsers.filter(session => {
        return session.userId === userId && session.sessionId === sessionId
    });
}

const newConnection = ({userId, sessionId, socketId}) => {
    let session = findSession({userId, sessionId})
    if (session.length === 0) {
        return null
    }
    session[0].sockets.push(socketId)
    return session[0]
}

const findAllConnections = (users) => {
    return activeUsers.filter(session => users.includes(session.userId)).map(session => session.sockets).flat()
}

const findConnection = ({socketId}) => {
    return activeUsers.filter(session => session.sockets.includes(socketId))
}

const closeConnection = ({socketId}) => {
    const session = findConnection({socketId})
    if (session.length === 0) {
        return null
    }
    session[0].sockets = session[0].sockets.filter(socket => socket !== socketId)
    if (session[0].sockets.length === 0){
        return closeSession({userId: session[0].userId,  sessionId: session[0].sessionId})
    }
    return false
}

const closeSession = ({userId, sessionId}) => {
    const session = findSession({userId, sessionId})
    if (session.length === 0) {
        return null
    }
    activeUsers = activeUsers.filter(session => session.userId !== userId && session.sessionId !== sessionId)
    return true
}

const getOnlineUsers = () => {
    return new Set(activeUsers.map(session => session.userId))
}

const isUserActive = ({userId}) => {
    return getOnlineUsers().has(userId)
}

module.exports = {
    newSession,
    newConnection,
    findSession,
    findConnection,
    closeConnection,
    closeSession,
    isUserActive,
    getOnlineUsers,
    findAllConnections
}