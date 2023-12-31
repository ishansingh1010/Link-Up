const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    comment: {
        type: String,
        required: true,
    },
    commentLikes: {
        type: Number,
        default: 0,
    },
    commentLikeList: {
        type: [],
        default: [],
    },
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'user',
        required: true
    },
    postId: {
        type: mongoose.Types.ObjectId,
        ref: 'post',
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    },
})

commentSchema.set('timestamps', true)

module.exports = mongoose.model('comments', commentSchema)
