const mongoose = require('mongoose');
const { Schema } = mogoose;

const soldSchema = new Schema ({
    name: {
        type: String,
        required: false,
        trim: true
    },

    price: {
        type: Number,
        required: true,
        min: 0.99
    }

});

const Schema = mongoose.model('Sold', soldSchema);
module.exports = Sold;