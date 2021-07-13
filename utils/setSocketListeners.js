module.exports = (socket, dir) => {
    const fs = require("fs")
    const path = require("path")

    const listenersPath = path.resolve(dir)

    fs.readdir(listenersPath, (err, files) => {
        if (err) {
            process.exit(1)
        }
        files.map((fileName) => {
            if (fileName !== "index.js") {
                const listener = require(path.resolve(dir, fileName))
                listener(socket)
            }
        })
    })
}