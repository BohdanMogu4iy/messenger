import config from "../../../config"
import storageService from "../../storageService";

export default socket => {
    socket.onAny((event, ...args) => {
        console.log(event, args);
    });
    socket.on(config.socket.events.CONNECTED, ({session, token, user}) => {
        storageService.setSession(session)
        storageService.setToken(token)
        storageService.setUserId(user)
    })
}