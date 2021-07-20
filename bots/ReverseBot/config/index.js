const path = require('path')

const config = {
    URL: 'ws://localhost:5000',
    ops: {
        autoConnect: false,
        auth: {
            token: ``,
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
    appDir: path.resolve(__dirname, '../'),
    chats: [],
    onlineUsers: []
}

if (process.env.TOKEN) {
    config.ops.auth.token = `Bearer ${process.env.TOKEN}`
}

module.exports = config