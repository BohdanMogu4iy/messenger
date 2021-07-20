const config = require("../config")
const messageListener = require("./messageListener")
const fs = require('fs')
const path = require('path')


module.exports = socket => {
    socket.onAny((event, ...args) => {
        console.log(event);
    });

    messageListener(socket)

    socket.on(config.events.CONNECTED, ({session, token, user}) => {
        config.ops.auth = {
            session: session,
            token: `Bearer ${token}`
        }
        config.user = user

        fs.writeFile(path.resolve(config.appDir, '.env'), `TOKEN=${token}`, function(error){
            if(error) throw error;
        });
    })
}