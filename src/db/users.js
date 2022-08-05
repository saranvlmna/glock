const { User } = require('../models')

module.exports = {
    findByEmail: async (email) => {
        return await User.findOne({ email });
    },
    create: async (data) => {
        const result = await User.create(data)
        return {
            data: result
        }
    },
    list: async () => {
        const data = await User.find()
        return {
            data: data
        }
    },
}