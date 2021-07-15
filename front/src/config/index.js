import authService from "../services/storageService";

const config = {
    socket: {
        URL: 'ws://localhost:5000',
        ops: {
            autoConnect: false,
            auth: {
                token: `Bearer ${authService.getToken() || ''}`,
                session: authService.getSession() || ''
            },
            transports: ['websocket'],
            upgrade: false
        },
        events: {
            CHATS_ALL: "chats:all",
            USER_NEW: "user:new",
            USER_CONNECTED: "user:connected",
            USER_DISCONNECTED: "user:disconnected",
            CONNECTED: "connected"
        }
    }
}

export default config