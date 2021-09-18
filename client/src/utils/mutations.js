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

export const ADD_COMMENT = gql`
  mutation addComment($commentText: String!, $commentAuthor: String!, createdAt: String!) {
    addComment(commentText: $commentText, commentAuthor: $commentAuthor, createdAt: $createdAt) {
      _id
      commentText
      commentAuthor
      createdAt
    }
  }
`;

export const ADD_TO_CART = gql` 
  mutation addToCart($name: String!, $description: String!, $image: String!, $price: Float){
      addToCart(name: $name, description: $description, image: $image, price: $price){
        token
        products {
          _id
          name
          description
          image
          price
          quantity
        }
      }
  }

`;


export const REMOVE_FROM_CART = gql` 
  mutation removeProduct($name: String!, $description: String!, $image: String!, $price: Float){
      removeProduct(name: $name, description: $description, image: $image, price: $price){
        token
        products {
          _id
          name
          description
          image
          price
          quantity
        }
      }
  }

`;

export const UPDATE_CART_QUANTITY = gql` 
  mutation updateCartQuantity($name: String!, $description: String!, $image: String!, $price: Float){
    updateCartQuantity(name: $name, description: $description, image: $image, price: $price){
      token
      products {
        _id
        name
        description
        image
        price
        quantity
      }
    }
}
`;
