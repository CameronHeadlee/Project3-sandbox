// import React, { useEffect } from 'react';
// // import { loadStripe } from '@stripe/stripe-js';
// import { useLazyQuery } from '@apollo/client';
// import { QUERY_CHECKOUT } from '../../utils/queries';
// import { idbPromise } from '../../utils/helpers';
// import CartItem from '../CartItem';
// import Auth from '../../utils/auth';
// import { useStoreContext } from '../../utils/GlobalState';
// import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from '../../utils/actions';
// import './style.css';

// // TODO: Add a comment describing the functionality of loadStripe
// // Your comment here
// // This returns a Promise that resolves with a newly created stripe object.
// // const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

// const Cart = () => {
//   const [state, dispatch] = useStoreContext();
//   const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

//   // TODO: Add a comment describing the functionality of the useEffect hook in this instance
//   // setting up side effect to redirect using redirectToCHeckout function
//   // useEffect(() => {
//   //   if (data) {
//   //     stripePromise.then((res) => {
//   //       res.redirectToCheckout({ sessionId: data.checkout.session });
//   //     });
//   //   }
//   // }, [data]);

//   // TODO: Add a comment describing what data we are watching and what work should be preformed if that data changes
//   // Your comment here
//   //User cart will always hold all products selected
//   useEffect(() => {
//     async function getCart() {
//       const cart = await idbPromise('cart', 'get');
//       dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
//     }

//     if (!state.cart.length) {
//       getCart();
//     }
//   }, [state.cart.length, dispatch]);

//   function toggleCart() {
//     dispatch({ type: TOGGLE_CART });
//   }

//   function calculateTotal() {
//     let sum = 0;
//     state.cart.forEach((item) => {
//       sum += item.price * item.purchaseQuantity;
//     });
//     return sum.toFixed(2);
//   }

//   // TODO: Add a comment describing the functionality of our submitCheckout function.
//   // Your comment here

//   // For each product in cart , the submit checkout function will display product, product id and quantity of product. The function will calculate total and then check to see youre logged in. ifo you 
//   function submitCheckout() {
//     const productsIds = [];

//     state.cart.forEach((item) => {
//       for (let i = 0; i < item.purchaseQuantity; i++) {
//         productsIds.push(item._id);
//       }
//     });

//     getCheckout({
//       variables: { products: productsIds },
//     });
//   }

//   if (!state.cartOpen) {
//     return (
//       <div className="cart-closed" onClick={toggleCart}>
//         <span role="img" aria-label="trash">
//           🛒
//         </span>
//       </div>
//     );
//   }

//   return (
//     <div className="cart">
//       <div className="close" onClick={toggleCart}>
//         [close]
//       </div>
//       <h2>Shopping Cart</h2>
//       {state.cart.length ? (
//         <div>
//           {state.cart.map((item) => (
//             <CartItem key={item._id} item={item} />
//           ))}

//           <div className="flex-row space-between">
//             <strong>Total: ${calculateTotal()}</strong>

//             {Auth.loggedIn() ? (
//               <button onClick={submitCheckout}>Checkout</button>
//             ) : (
//               <span>(log in to check out)</span>
//             )}
//           </div>
//         </div>
//       ) : (
//         <h3>
//           <span role="img" aria-label="shocked">
//             
//           </span>
//           You haven't added anything to your cart yet!
//         </h3>
//       )}
//     </div>
//   );
// };

// export default Cart;
