const uuidv4 = require("uuid").v4

const activeUsers = []

const newConnection = ({userId}) => {
    const newConnection = {
        userId,
        sessionId: uuidv4()
    }
    activeUsers.push(newConnection)
    return newConnection
}

const findConnection = ({userId, sessionId}) => {
    return activeUsers.filter(session => {
        return session.userId === userId && session.sessionId === sessionId
    })
}

module.exports = {
    activeUsers,
    newConnection,
    findConnection
}