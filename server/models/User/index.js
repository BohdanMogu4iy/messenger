const {createChat} = require("../Chat");
const {User} = require('../index')

const createUser = user => {
    return new User(user).save()
        .then(createdUser => {
            return User.find({_id: {$ne: createdUser.id}}).exec()
                .then(chatList => {
                    return chatList.map(u =>
                        createChat({
                            users: [createdUser._id, u._id],
                            personal: true
                        }))
                })
                .then(promiseList => {
                    return {
                        promiseList,
                        createdUser
                    }
                })

        })
        .then(({promiseList, createdUser}) => {
            return Promise.all(promiseList)
                .then(() => createdUser)
        })
}

const updateUserLastSeen = ({userId, lastSeen}) => {
    return User.findOneAndUpdate({_id: userId}, {"$set": {lastSeen: lastSeen}})
        .then(() => {
            return lastSeen
        })
}

module.exports = {
    createUser,
    updateUserLastSeen
}
