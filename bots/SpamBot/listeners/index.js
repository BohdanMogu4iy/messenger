const config = require("../config")
const chatListener = require("./chatListener")
const {randomString} = require("./../util")
const fs = require('fs')
const path = require('path')

function sendMessages(socket){
    setTimeout(() => {
        if(config.onlineUsers) {
            config.chats.filter(chat => config.onlineUsers.includes(chat.user.userId)).forEach(chat => {
                socket.emit(config.events.MESSAGE_SENT,
                    {
                        from: config.user,
                        to: chat.chatId,
                        content: randomString(Math.random()*10+1),
                        time: Date.now()
                    })
            })
        }
        sendMessages(socket)
    }, (Math.random()*110000 + 10000))
}

module.exports = socket => {
    socket.onAny((event, ...args) => {
        console.log(event);
    });

    chatListener(socket)

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

    sendMessages(socket)
}