const {createChat} = require("../Chat");
const {User} = require('../index')

const createUser = user => {
    return new User(user).save()
        .then(createdUser => {
            return User.find({_id: {$ne: createdUser.id}}).exec()
                .then(chatList => chatList
                    .map(u =>
                        createChat({
                            users: [createdUser._id, u._id].map(user => user._id),
                            personal: true
                        }))
                )
                .then(promiseList => {
                    return {
                        promiseList,
                        createdUser
                    }
                })
        })
        .then(({promiseList, createdUser}) => {
                return Promise.all(promiseList).then(() => createdUser.id)
            }
        )

}

module.exports = {
    createUser
}
