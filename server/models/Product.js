const mongoose = require('mongoose');
const { User } = require('.');
const { Schema } = mongoose;

const productSchema = new Schema({
    name: {
        type: String,
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
        type: ID,
        ref: 'User',
        
      }
      // category: {
      //   type: Schema.Types.ObjectId,
      //   ref: 'Category',
      //   required: true
      // }
});

const Products= mongoose.model('Product', productSchema);
module.exports = Products;