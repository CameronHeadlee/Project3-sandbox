import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

// REMOVE_FROM_CART,
// UPDATE_CART_QUANTITY,
// ADD_TO_CART,

export const REMOVE_FROM_CART = gql` 
  mutation removeProducts($name: String!, $description: String!, $image: String!, $price: Float){
      removeProducts(name: $name, description: $description, image: $image, price: $price){
        
      }
  }

`;

// export const UPDATE_CART_QUANTITY = gql` 
//   mutation update
// `;