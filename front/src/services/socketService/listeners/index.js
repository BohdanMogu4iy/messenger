import config from "../../../config"
import authService from "../../storageService";

export default socket => {
    socket.onAny((event, ...args) => {
        console.log(event, args);
    });
    socket.on(config.socket.events.SESSION_NEW, ({session, token}) => {
        authService.setSession(session)
        authService.setToken(token)
    })
}