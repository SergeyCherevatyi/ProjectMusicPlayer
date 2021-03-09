const {Schema, model} = require('mongoose')

const userSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    imgUser: {
        type: String,
        default: '/'
    }, 
    tracks: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Track'
        }
    ]

}) 

module.exports = model('User', userSchema)
