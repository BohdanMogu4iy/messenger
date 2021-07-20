const path = require('path')

const config = {
    dev: {
        mongo_db: {}
    },
    prod: {
        mongo_db: {}
    },
    events: {
        CHATS_ALL: "chats:all",
        USER_NEW: "user:new",
        USER_CONNECTED: "user:connected",
        USER_DISCONNECTED: "user:disconnected",
        USER_TYPING: "user:typing",
        CONNECTED: "connected",
        DISCONNECT: "disconnect",
        MESSAGE_GOT: "message:got",
        MESSAGE_SENT: "message:sent",

    },
    jwt: {},
    errors: {},
    imagesDir: path.resolve(__dirname, "../public/images"),
}

if (process.env.JWT_SECRET) {
    config.jwt.SECRET = process.env.JWT_SECRET
} else {
    console.error("JWT_SECRET is not SET")
    process.exit(1)
}

if (process.env.MONGODB_URI) {
    if (process.env.NODE_ENV && process.env.NODE_ENV === 'production') {
        config.prod.mongo_db.URI = process.env.MONGODB_URI
    } else config.dev.mongo_db.URI = process.env.MONGODB_URI
} else {
    console.error("MOGODB_URI is not SET")
    process.exit(1)
}

module.exports = config