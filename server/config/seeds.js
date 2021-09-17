const db = require('./connection');
const { Product } = require('../models');

db.once('open', async () => {
  
  // await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Tin of Cookies',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      // category: categories[0]._id,
      price: 2.99,
      quantity: 500
    }   
  ]);

  console.log('products seeded');

  process.exit();
});
