const {User} = require("../models/User");


module.exports = {
    add: async (user) => {
        await User.create(user)
    },
    remove: async (userId) => {
        await User.destroy({
            where: {
                id: userId
            }
        })
    },
    update: async (user) => {
        let userdb = User.findOne({
            where: {id: user.id}
        })
    },
}
