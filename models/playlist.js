const {Schema, model} = require('mongoose')

const playlistSchema = new Schema ({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    tracks: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Track'
        }
    ]

}) 

module.exports = model('Playlist', playlistSchema)