const config = {
    URL: 'ws://localhost:5000',
    ops: {
        autoConnect: false,
        auth: {
            token: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MGYxODE0OWFhZTJjYjM2ODg5OTdjOWMiLCJpYXQiOjE2MjY0NDAwMTB9.zqNs29Qy4uY7bJsqkVJoIppl4IUYgXvB_uzezBCUwm8`,
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
    user: null
}

module.exports = config