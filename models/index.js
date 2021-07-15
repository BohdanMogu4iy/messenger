const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userScheme = new Schema({
    name: String,
    logoSrc: String,
    lastSeen: Date
})

const messageScheme = new Schema({
    from: {type: Schema.Types.ObjectId, ref: 'User'},
    to: {type: Schema.Types.ObjectId, ref: 'Chat'},
    content: String,
    time: Date
})

const chatScheme = new Schema({
    users: [{type: Schema.Types.ObjectId, ref: 'User'}],
    messages: [{type: Schema.Types.ObjectId, ref: 'Message'}],
    personal: Boolean
})

module.exports = {
    User: mongoose.model("User", userScheme),
    Message: mongoose.model("Message", messageScheme),
    Chat: mongoose.model("Chat", chatScheme)
}
