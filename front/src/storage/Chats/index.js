import {createContext} from "react";
export const ContextChats = createContext();

export const ACTIONS = {
    CHATS_ALL: "CHATS_ALL",
    USER_CONNECTED: "USER_CONNECTED",
    USER_DISCONNECTED: "USER_DISCONNECTED"
}

export const chatsInitialState = {
    chats: [],
    onlineUsers: []
};

export const chatsReducer = (state, action) => {
    switch(action.type) {
        case ACTIONS.CHATS_ALL:
            state.chats.push(action.data.users)
            return state
        case ACTIONS.USER_CONNECTED:
            state.onlineUsers.push(action.data.user)
            return state
        case ACTIONS.USER_DISCONNECTED:
            state.onlineUsers = state.onlineUsers.filter(user => user._id !== action.data.userId)
            return state
        default:
            return state
    }
}
