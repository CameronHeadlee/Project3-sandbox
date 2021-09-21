const mongoose = require('mongoose');
// const { User } = require('.');
const { Schema } = mongoose;

const productSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true,
        trim: true
      },
      description: {
        type: String
      },
      image: {
        type: String
      },
      price: {
        type: Number,
        required: true,
        min: 0.99
      },
      quantity: {
        type: Number,
        min: 0,
        default: 0
      },
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      }
    
});

const Products = mongoose.model('Product', productsSchema);
module.exports = Products;