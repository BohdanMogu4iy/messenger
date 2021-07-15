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
            CHATS_ONLINE: "chats:online",
            CHAT_NEW: "chat:new",
            CHAT_ONLINE: "chat:online",
            SESSION_NEW: "session:new"
        }
    }
}

export default config