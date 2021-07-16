const config = require("../config")
const chatListener = require("./chatListener")

function randomString(length) {
    let result           = '';
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}

function sendMessages(socket){
    setTimeout(() => {
        if(config.onlineUsers) {
            config.chats.filter(chat => config.onlineUsers.includes(chat.user.userId)).forEach(chat => {
                socket.emit(config.events.MESSAGE_SENT, {from: config.user, to: chat.chatId, content: randomString(Math.random()*10+1), time: Date.now()})
            })
        }
        sendMessages(socket)
    }, (Math.random()*110000 + 10000))
}

module.exports = socket => {
    socket.onAny((event, ...args) => {
        console.log(event, args);
    });

    chatListener(socket)

    socket.on(config.events.CONNECTED, ({session, token, user}) => {
        config.ops.auth = {
            session: session,
            token: `Bearer ${token}`
        }
        config.user = user
    })

    sendMessages(socket)
}