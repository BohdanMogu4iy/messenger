import {createContext} from "react";
export const ContextChats = createContext()

export const ACTIONS = {
    CHATS_ALL: "CHATS_ALL",
    USER_NEW: "USER_NEW",
    USER_CONNECTED: "USER_CONNECTED",
    USER_DISCONNECTED: "USER_DISCONNECTED",
    CHAT_SELECT: "CHAT_SELECT",
    MESSAGE_NEW: "MESSAGE_NEW"
}

export const chatsInitialState = {
    chats: [],
    onlineUsers: [],
    selectedChat: null
};

export const chatsReducer = (state, action) => {
    const newState = JSON.parse(JSON.stringify(state))
    switch(action.type) {
        case ACTIONS.CHATS_ALL:
            newState.chats = action.data
            newState.onlineUsers = action.data.filter(chat => chat.user.online).map(chat => chat.user.userId)
            return newState
        case ACTIONS.USER_NEW:
            newState.chats.push(action.data)
            newState.onlineUsers.push(action.data.user.userId)
            return newState
        case ACTIONS.USER_CONNECTED:
            newState.onlineUsers.push(action.data)
            newState.chats.map(chat => {
                chat.user.lastSeen = action.lastSeen
                return chat
            })
            return newState
        case ACTIONS.USER_DISCONNECTED:
            newState.onlineUsers = newState.onlineUsers.filter(userId => {
                return userId !== action.data
            })
            newState.chats.map(chat => {
                chat.user.lastSeen = action.lastSeen
                return chat
            })
            return newState
        case ACTIONS.CHAT_SELECT:
            newState.selectedChat = action.data
            return newState
        case ACTIONS.MESSAGE_NEW:
            for (let chat of newState.chats){
                if (chat.chatId === action.data.to){
                    console.log(action.data)
                    chat.messages.push(action.data)
                }
            }
            newState.chats.map(chat => {
                chat.user.lastSeen = action.lastSeen
                return chat
            })
            return newState
        default:
            return newState
    }
}
