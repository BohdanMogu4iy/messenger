const config = require("../config")

module.exports = socket => {
    socket.onAny((event, ...args) => {
        console.log(event, args);
    });

    socket.on(config.events.CONNECTED, ({session, token, user}) => {
        config.ops.auth = {
            session: session,
            token: `Bearer ${token}`
        }
        config.user = user
    })
}