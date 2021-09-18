const db = require('./connection');
const {User, Product } = require('../models');

db.once('open', async () => {
  
  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Tin of Cookies',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      // category: categories[0]._id,
      price: 2.99,
      quantity: 500
    },
    {
      name: 'Nike SB Dunk High Hawaii',
      description: 'This Nike SB Dunk High pays tribute to the islands of Hawaii.',
      image: '',
      price: 350.00,
      quantity: 3,


    },
    {
      name: 'Air Jordan 4 University Blues',
      description: 'This Air Jordan 4 comes dressed in premium suede leather materials in an OG colorway.',
      image: '',
      price: 450.00,
      quantity: 2,

    },
    {
      name: 'Air Jordan 1 Low Chinese New Year',
      description: 'Dressed in black and red canvas materials, these sneakers are embellished with various Chinese graphics including depictions of an Ox.',
      image: '',
      price: 540.00,
      quantity: 1,

    },
    {
      name: 'Sacai x Nike Vaporwaffle "Dark Iris"',
      description: 'Suede and leather cover the forefoot and rears while white midsoles and black outsoles complete the design.',
      image: '',
      price: 500.00,
      quantity: 1,

    },
    {
      name: 'Air Jordan 4 Lightning',
      description: 'Uppers consist of vibrant yellow leather with yellow laces and what appears to be mesh netting along the throats and side panels. Black/white midsoles and black outsoles complete the design.',
      image: '',
      price: 500.00,
      quantity: 1,

    },
    {
      name: 'Nike SB Dunk Low Street Hawker',
      description: 'Although they were originally released for the Chinese New Year that initiated the Year of the Ox, these sneakers also tell a story of Chinese cuisine.',
      image: '',
      price: 645.00,
      quantity: 1,

    },
    {
      name: 'Bad Bunny x Adidas Forum Buckle Low',
      description: 'Puerto Rican/American rapper “Bad Bunny” recently dropped two collaborations with Adidas on the forum low, both of which have been insanely hyped and profitable.',
      image: '',
      price: 690.00,
      quantity: 1,

    },
    {
      name: 'Travis Scott x Air Jordan 6 British Khaki',
      description: 'Translucent grey overlays cover the tongues, lace toggles, and also heel hoops that include a Bright Crimson strip. Dark brown midsoles and outsoles complete the design.',
      image: '',
      price: 650.00,
      quantity: 1,

    },
    {
      name: 'Fragment x Sacai x Nike LD Waffle',
      description: 'Suede, leather, and nylon overlays cover the dark navy upper while white/grey swooshes provide contrast. Sail midsoles and black outsoles complete the design.',
      image: '',
      price: 700.00,
      quantity: 1,

    },
    {
      name: 'Supreme x Nike Dunk Low Stars',
      description: 'Released just last month after months of leaks and rumors, the Supreme x Nike SB Dunk has been for sure one of the most profitable sneakers of this year.',
      image: '',
      price: 1200.00,
      quantity: 1,

    },
    {
      name: 'Trophy Room x Air Jordan 1 High Freeze-Out',
      description: 'Inspired by a conspiracy of NBA stars plotting to Freeze Michael Jordan out of the All-Star games by limiting his possessions, these AJ1s are likely one of the most anticipated of 2021.',
      image: '',
      price: 2800.00,
      quantity: 1,

    },



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
    email: 'elijah@testmail.com',
    password: 'password12345',
    orders: [
      {
        product: [products]
      }
    ]
  });

  await User.create({
    firstName: 'Khadra',
    lastName: 'Shegow',
    username: 'KSheg123',
    email: 'khadra@testmail.com',
    password: 'password12345',
    orders: [
      {
        product: [products]
      }
    ]
  });

  console.log('users seeded');

  process.exit();
});
