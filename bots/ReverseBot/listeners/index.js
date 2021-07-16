const config = require("../config")
const messageListener = require("./messageListener")

module.exports = socket => {
    socket.onAny((event, ...args) => {
        console.log(event, args);
    });

    messageListener(socket)

    socket.on(config.events.CONNECTED, ({session, token, user}) => {
        console.log(token)
        config.ops.auth = {
            session: session,
            token: `Bearer ${token}`
        }
        config.user = user
    })
}