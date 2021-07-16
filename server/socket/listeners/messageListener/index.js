const {updateUserLastSeen} = require("../../../models/User");
const {updateChatMessages} = require("../../../models/Chat");
const {Chat} = require("../../../models");
const {findAllConnections} = require("../../../sessionStorage/activeUsers");
const {getChatUsers} = require("../../../models/Chat");
const {createMessage} = require("../../../models/Message");
const {events} = require("../../../config");


const messageSentListener = (io, socket) => {
    return async ({from, to, content, time}) => {
        await createMessage({from, to, content, time})
            .then(createdMessage => {
                return updateChatMessages({chatId: to, message: createdMessage})
            })
            .then(message => {
                return getChatUsers(message.to)
                    .then(users => {
                        return findAllConnections(users)
                    })
                    .then(connections => {
                        return updateUserLastSeen({userId: socket.userId, lastSeen: Date.now()}).then(
                            lastSeen => {
                                connections.forEach(socketId => {
                                    if (socketId !== socket.id){
                                        console.log(socketId+"  emit events.MESSAGE_GOT")
                                        io.to(socketId).emit(events.MESSAGE_GOT, {message: message, lastSeen: lastSeen})
                                    }
                                })
                            }
                        )
                    })
            })
    }
}

module.exports = {
    messageSentListener
}