const db = require('./connection');
const {  Products } = require('../models');

db.once('open', async () => {
  
  await Products.deleteMany();

  const product = await Products.insertMany([
    {
      name: 'Tin of Cookies',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'https://swoo.sh/2XrMVGY',
      price: 2.99,
      quantity: 500
    },
    {
      name: 'Jordan',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'https://bit.ly/3CjDCIs',
      price: 2.99,
      quantity: 500
    }   
  ]);


  console.log('products seeded');

  process.exit();
});
