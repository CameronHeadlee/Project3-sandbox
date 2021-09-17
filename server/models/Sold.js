const mongoose = require('mongoose');
const { Schema } = mongoose;

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

const Sold = mongoose.model('Sold', soldSchema);
module.exports = Sold;