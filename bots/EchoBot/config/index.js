const config = {
    URL: 'ws://localhost:5000',
    ops: {
        autoConnect: false,
        auth: {
            token: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MGYxN2U3MmFhZTJjYjM2ODg5OTdjNDIiLCJpYXQiOjE2MjY0MzkyODJ9.Uyt61ychoJwnvV3J0Vwbnc8DUIt_I4gMzlBR-jSc59o`,
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