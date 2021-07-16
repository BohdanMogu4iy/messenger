const Message = require('../index').Message

const createMessage = message => {
    return new Message(message).save()
        .then(createdMessage => {
            return createdMessage
        })
}

module.exports = {
    createMessage
}