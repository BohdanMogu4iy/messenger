const path = require("path")
const fs = require('fs')
const {imagesDir} = require('../config')

const chatMinimiseSerializer = chat => {
    if (chat.personal) {
        const user = chat.users[0]
        return {
            chatId: chat.id,
            user: chat.online ? userSerializer(user, true) : userSerializer(user)
        }
    }else return {}
}

const chatSerializer = chat => {
    if (chat.personal) {
        const user = chat.users[0]
        const logoFileBase64 = fs.readFileSync(path.resolve(imagesDir, user.logoSrc))
        return {
            chatId: chat.id,
            logoBase64: Buffer.from(logoFileBase64).toString('base64'),
            name: user.name,
            messages: chat.messages.map(messageSerializer),
            user: chat.online ? userSerializer(user, true) : userSerializer(user)
        }
    }else return {}
}

const messageSerializer = message => {
    return message
}

const userSerializer = (user, online=false) => {
    return {
        userId: user.id,
        lastSeen: user.lastSeen,
        online
    }
}

const userMinimiseSerializer = user => {
    return {
        userId: user.id,
    }
}

module.exports = {
    chatSerializer,
    chatMinimiseSerializer,
    messageSerializer,
    userSerializer,
    userMinimiseSerializer
}