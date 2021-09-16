const mongoose = require('mongoose');

const { Schema } = mongoose;

ordersSchema = new Schema ({
    purchaseDate: {
        type: Date,
        default: Date.now
    },
    products: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Product'
      }
    ]

});


module.exports = mongoose.model('Orders', ordersSchema);