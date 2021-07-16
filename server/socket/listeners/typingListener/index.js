const {getChatUsers} = require("../../../models/Chat");

const typingListeners = io => {
    return async ({chatId}) => {
        console.log(`typing... to ${chatId}`)
        await getChatUsers(chatId)
            .then(users => {
                console.log(users)
            })
    }
}

module.exports = typingListeners