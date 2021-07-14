const uuidv4 = require("uuid").v4

const allUsers = []

const createUser = () => {
    const newUser = {userId: uuidv4()}
    allUsers.push(newUser)
    return newUser
}

module.exports = {
    allUsers,
    createUser
}