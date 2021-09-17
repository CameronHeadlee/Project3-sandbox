const db = require('./connection');
const { User, Products } = require('../models');

db.once('open', async () => {
  
  await Products.deleteMany();

  const products = await Products.insertMany([
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

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    username: 'PWash123',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        product: [products]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    username: 'EHolt123',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
