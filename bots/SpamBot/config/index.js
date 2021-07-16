const config = {
    URL: 'ws://localhost:5000',
    ops: {
        autoConnect: false,
        auth: {
            token: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MGYxODgzMGFhZTJjYjM2ODg5OTdkNTgiLCJpYXQiOjE2MjY0NDE3NzZ9.usgv8zL_rzXl-qqhr7B-XA-WxOpxn_Z_yoLgPYBaiiM`,
            session: ''
        },
        transports: ['websocket'],
        upgrade: false
    },
    events: {
        CHATS_ALL: "chats:all",
        USER_NEW: "user:new",
        USER_CONNECTED: "user:connected",
        USER_DISCONNECTED: "user:disconnected",
        // USER_TYPING: "user:typing",
        CONNECTED: "connected",
        MESSAGE_GOT: "message:got",
        MESSAGE_SENT: "message:sent",
    },
    user: null,
    chats: [],
    onlineUsers: []
}

module.exports = config