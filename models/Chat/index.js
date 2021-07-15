const {chatSerializer} = require("../../serializers");
const {getOnlineUsers} = require("../../sessionStorage/activeUsers");
const Chat = require('../index').Chat

const createChat = chat => {
    return new Chat(chat).save()
        .then(createdChat => {
            return createdChat.id
        })
}

const getAllChats = () => {
    return Chat.find({})
        .populate('users')
        .populate('messages')
        .then(chatList => {
            return chatList.map(chatSerializer)
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
                chat.online = onlineUsers.has(userId)
                return chat
            }).map(chatSerializer)
        })
}

module.exports = {
    createChat,
    getAllChats,
    getAllUserPersonalChats,
    getUsersPersonalChat
}
