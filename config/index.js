module.exports = {
    dev: {

    },
    prod: {

    },
    events: {
        USER_CREATE: "user:create",
        USER_NEW: "user:new",
        USER_CONNECT: "user:connect",
        USER_DISCONNECT: "user:disconnect",
        USER_CONNECTED: "user:connected",
        USER_DISCONNECTED: "user:disconnected",
        MESSAGE_GOT: "message:got",
        MESSAGE_SENT: "message:sent",
        SESSION_NEW: "session:new"
    },
    jwt: {
        SECRET: process.env.JWT_SECRET || 'VERY_SECRET_KEY'
    },
    errors: {
      UNAUTHORIZED: "Unauthorized"
    }
}