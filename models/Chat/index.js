const {getOnlineUsers} = require("../../sessionStorage/activeUsers");
const Chat = require('../index').Chat

const createChat = chat => {
    return new Chat(chat).save()
        .then(createdChat => {
            return createdChat.id
        })
}

const getAllChats = () => {
    return Chat.find({}).exec()
}

const getUserPersonalChat = users => {
    return Chat.find({users: {$all: users}, personal: true})
        .populate('users')
        .then(chatList => {
            return chatList[0]
        })
}

const getAllUserPersonalChats = userId => {
    return Chat.find({users: {$all: userId}, personal: true})
        .populate('users')
        .then(chatList => {
            chatList.map(chat => {
                chat.users = chat.users.filter(user => user.id !== userId)
                return chat
            })
            return chatList
        })
}

const getAllOnlineUserChats = userId => {
    return Chat.find({users: {$all: userId}, personal: true})
        .populate('users')
        .then(chatList => {
            const onlineUsers = getOnlineUsers()
            chatList.map(chat => {
                chat.users = chat.users.filter(user => {
                    return (user.id !== userId) && (onlineUsers.has(user.id))
                })
                return chat
            })
            chatList = chatList.filter(chat => chat.users.length > 0)
            return chatList
        })
}

module.exports = {
    createChat,
    getAllChats,
    getAllUserPersonalChats,
    getAllOnlineUserChats,
    getUserPersonalChat
}
