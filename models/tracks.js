const {Schema, model} = require('mongoose')

const trackSchema = new Schema ({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}) 

module.exports = model('Track', trackSchema)
