const Orders = require('mongoose');

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

const Orders = mongoose.model('Orders', ordersSchema);
module.exports = Orders;