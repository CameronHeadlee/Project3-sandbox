const db = require('./connection');
const { User, Products } = require('../models');

db.once('open', async () => {
  
  await User.deleteMany();

  const { _id } = await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    username: 'PWash123',
    email: 'pamela@testmail.com',
    password: 'password12345',
   
  });

     await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    username: 'EHolt123',
    email: 'elijah@testmail.com',
    password: 'password12345',
 
  });

    await User.create({
    firstName: 'Khadra',
    lastName: 'Shegow',
    username: 'KSheg123',
    email: 'khadra@testmail.com',
    password: 'password12345',
   
  });

  console.log('users seeded');


  await Products.deleteMany();

  const products = await Products.insertMany([
    {
      name: 'New Balance 990v3 X Joe Freshgoods Outside Clothes',
      description:
        'These kicks are inspired by Joe’s experience of growing up in Chicago’s West Side during the ‘90s.',
      image: 'https://bit.ly/3lzSnA8',
      price: 348.00,
      quantity:1,
      userId: _id

     },
    {
      name: 'Nike Air Max 90 x OFF-WHITE Desert Ore',
      description:
        'A fanciful take on the retro silhouette of the Air Max by Virgil Abloh.',
      image: 'https://bit.ly/3EE2w7R',
      price: 968.00,
      quantity:1,
      userId: _id
    },
    {
      name: 'Nike SB Dunk High Hawaii',
      description: 'This island-inspired SB Dunk High features a traditional floral print to capture Hawaiian vibes!',
      image: 'https://bit.ly/3hLcmL3',
      price: 350.00,
      quantity:1,
      userId: _id


    },
    {
      name: 'Air Jordan 4 University Blues',
      description: 'The Air Jordan 4 Retro University Blue updates the classic silhouette with a suede upper in a familiar hue inspired by Michael Jordans UNC alma mater.',
      image: 'https://bit.ly/3u33iGB',
      price: 450.00,
      quantity:2,
      userId: _id

    },
    {
      name: 'Air Jordan 1 Low OG Chinese New Year',
      description: 'This shoe was designed to celebrate the Chinese New Year with a classic Bred color with references to the year of the ox.',
      image: 'https://bit.ly/2XtaG25',
      price: 540.00,
      quantity:1,
      userId: _id

    },
    {
      name: 'Sacai x Nike Vaporwaffle "Dark Iris"',
      description: 'Combining the innovative Vaporfly with the classic Pegasus, The Nike x sacai VaporWaffle doubles up on the details, merging the past and future of running.',
      image: 'https://bit.ly/3zvKZuN',
      price: 500.00,
      quantity:1,
      userId: _id

    },
    {
      name: 'Air Jordan 4 Retro Lightning',
      description: 'Flooding the nubuck upper in bright yellow. Black netting and dark grey structural wings provide contrast, with matching grey accents on the woven tongue tag, interior tongue and Jumpman branding at the heel.',
      image: 'https://bit.ly/2XlFXU5',
      price: 500.00,
      quantity:1,
      userId: _id

    },
    {
      name: 'Jason Deng x Dunk Low Pro SB Street Hawker',
      description: 'Design by Guangzhou artist Jason Deng the Nike Dunk Low Street Hawker pays homage to Chinese street food vendors and Chinese food culture at large.',
      image: 'https://bit.ly/3Et3h3l',
      price: 645.00,
      quantity:1,
      userId: _id

    },
    {
      name: 'Bad Bunny x Adidas Forum Buckle Low Back To School',
      description: 'Delivering the Latin recording artists stealthy interpretation of the vintage hoops shoe.',
      image: 'https://bit.ly/2Zdfjhj',
      price: 690.00,
      quantity:1,
      userId: _id

    },
    {
      name: 'Travis Scott x Air Jordan 6 Retro British Khaki',
      description: 'Travis Scott x Air Jordan 6 Retro British Khaki reunites Jordan Brand with the Houston rapper. The upper is crafted with suede and canvas, accented with Bright Crimson details.',
      image: 'https://bit.ly/2XoJWiI',
      price: 650.00,
      quantity:1,
      userId: _id

    },
    {
      name: 'Fragment Design x Sacai x Nike LDV Waffle Blackened Blue',
      description: 'This collaboration leverages the creativity of renowned Japanese labels from the worlds of streetwear and high fashion.',
      image: 'https://bit.ly/2Xu1yKE',
      price: 700.00,
      quantity: 1,
      userId: _id

    },
    {
      name: 'Supreme x Nike Dunk Low OG SB QS Barkroot Brown',
      description:  'Like the original, the shoe features a white leather upper, printed gold stars, stuffed textile tongue, flat black laces, a gold Supreme lace jewel, and croc-embossed leather overlays, finished here in a rich brown hue.',
      image: 'https://bit.ly/3hH8xGE',
      price: 1192.00,
      quantity:1,
      userId: _id

    },
    {
      name: 'Trophy Room x Air Jordan 1 Retro High OG SP Chicago',
      description: 'This shoe draws inspiration from a moment in NBA history dubbed the freezout: in 1985, playing in his first ever All-Star game, MJ was reportedly denied the ball by established stars who wanted the embarrass the brash rookie.',
      image: 'https://bit.ly/3hJ7I04',
      price: 2033.00,
      quantity:1,
      userId: _id

    },



  ]);


  console.log('products seeded');

  

  process.exit();
});
