const fs = require('fs')
const path = require("path");
const {promisify} = require('util')
const readDirPromise = promisify(fs.readdir)
const {imagesDir} = require('../config')

const nameList = ["Jhon", "Bohdan", "Sergiy", "Petro", "Denys", "Volodymyr", "Artem", "Yaroslav", "Ivan", "Alex"]

const getRandomInt = max => {
    return Math.floor(Math.random() * max);
}

const getRandomImage = dir => {
    return readDirPromise(dir)
        .then(files => {
            return path.resolve(dir, files[getRandomInt(files.length)])
        })
}

const getRandomName = () => {
    return nameList[getRandomInt(nameList.length)]
}

const mockUser = () => {
    return getRandomImage(imagesDir)
        .then(imagePath => {
            const user = {}
            user.logoSrc = path.relative(imagesDir, imagePath)
            user.name = getRandomName()
            user.lastSeen = Date.now()
            return user
        })
}

module.exports = {
    getRandomInt,
    getRandomImage,
    getRandomName,
    mockUser
}