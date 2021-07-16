const initListeners = require("../socket/listeners")

const initSocketIO = io => {
    initListeners(io)
}

module.exports = initSocketIO