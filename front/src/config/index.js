import authService from "../services/authService";

const config = {
    socket: {
        URL: 'ws://localhost:5000',
        ops: {
            autoConnect: false,
            auth: {
                token: `Bearer ${authService.getToken()||''}`,
                session: authService.getSession() || " "
            },
            transports: ['websocket'],
            upgrade: false
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
        }
    }
}

export default config