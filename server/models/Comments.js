const mongoose = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const { Schema } = mongoose;

const commentsSchema = new Schema({
    content: [
        {
        commentText: {
        type: String,
        required: false,
        trim: true
        },
        commentAuthor: {
        type: String,
        required: true
        },
        createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
        },
    },
    ],
});
const Comments = mongoose.model('Comments', commentsSchema);
module.exports = Comments;