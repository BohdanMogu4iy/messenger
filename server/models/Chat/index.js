const {chatSerializer} = require("../../serializers");
const {getOnlineUsers} = require("../../sessionStorage/activeUsers");
const Chat = require('../index').Chat

const getChatUsers =  chatId => {
    return Chat.find({_id: chatId}).exec()
        .then(chats => {
            return chats[0]?.users || []
        })
}

const createChat = chat => {
    return new Chat(chat).save()
        .then(createdChat => {
            return createdChat
        })
}

const getAllChats = () => {
    return Chat.find({})
        .populate('users')
        .populate('messages')
        .then(chatList => {
            return chatList.map(chatSerializer) || []
        })
}

const getUsersPersonalChat = (users, serializer=null) => {
    return Chat.find({users: {$all: users}, personal: true})
        .populate('users')
        .populate('messages')
        .then(chatList => {
            return serializer ? chatList.map(serializer)[0] : chatList[0]
        })
}

const getAllUserPersonalChats = userId => {
    return Chat.find({users: {$all: userId}, personal: true})
        .populate('users')
        .populate('messages')
        .then(chatList => {
            const onlineUsers = getOnlineUsers()
            return chatList.map(chat => {
                chat.users = chat.users.filter(user => user.id !== userId)
                chat.online = onlineUsers.has(chat.users[0].id)
                return chat
            }).map(chatSerializer)
        })
}

const updateChatMessages = ({chatId, message}) => {
    return Chat.findOneAndUpdate({_id: chatId}, {
        $push: {messages: message._id}
    })
        .then(() => {
            return message
        })
}

module.exports = {
    createChat,
    getAllChats,
    getAllUserPersonalChats,
    getUsersPersonalChat,
    getChatUsers,
    updateChatMessages
}
