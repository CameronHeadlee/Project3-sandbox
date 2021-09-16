const mongoose = require('mongoose');

const { Schema } = mongoose;

const commentsSchema = new Schema({
    content: [{
        commentText: {
        type: String,
        required: false,
        trim: true
        },

        
    }
    
    ]
});

const Comments = mongoose.model('Comments', commentsSchema);
module.exports = Comments;