const config = {
    URL: 'ws://localhost:5000',
    ops: {
        autoConnect: false,
        auth: {
            token: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MGYxODI4MmFhZTJjYjM2ODg5OTdjZWUiLCJpYXQiOjE2MjY0NDAzMjJ9.4rg-XWoNCu-N5wB5kkoThegvL3ZlN6oaJ1KVk6EdnSo`,
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