const {Chat} = require("../../../models");
const {findAllConnections} = require("../../../sessionStorage/activeUsers");
const {getChatUsers} = require("../../../models/Chat");
const {createMessage} = require("../../../models/Message");
const {events} = require("../../../config");


const messageSentListener = (io, socket) => {
    return async ({from, to, content, time}) => {
        await createMessage({from, to, content, time})
            .then(createdMessage => {
                return Chat.findOneAndUpdate(
                    {_id: to}, {
                        $push: {messages: createdMessage._id}
                    })
                    .then(() => {
                        return createdMessage
                    })
            })
            .then(message => {
                return getChatUsers(message.to)
                    .then(users => {
                        return findAllConnections(users)
                    })
                    .then(connections => {
                        connections.forEach(socketId => {
                            if (socketId !== socket.id){
                                console.log(socketId+"  emit events.MESSAGE_GOT")
                                io.to(socketId).emit(events.MESSAGE_GOT, message)
                            }
                        })
                    })
            })
    }
}

module.exports = {
    messageSentListener
}