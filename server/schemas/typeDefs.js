const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String
    products: [Products]
  }

  type Comment { 
    _id: ID
    commentText: String   
    commentAuthor: String
  }

  type Products { 
    _id: ID
    name: String
    description: String
    image: String
    price: Float
    quantity: Int
    userId: ID!
  }

  type Order {
    _id: ID
    purchaseDate: String
    products: [Products]
  }

  type Checkout{
    session: ID
  }

  type Auth {
    token: ID!
    user: User
  }


  type Query {
    products: [Products]
    me: User
    closet(_id: ID!): [Products]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    updateProduct(_id: ID!, name: String!, description: String!, image: String!, price: Int!, quantity: Int!): Products
    addComment(_id: ID!, commentText: String!, commentAuthor: String!, createdAt: String!): Comment
    addToCart(_id: ID!, name: String!, description: String!, image: String!, price: Int!, quantity: Int!): Products
    removeProduct(_id: ID!, name: String!, description: String!, image: String!, price: Int!, quantity: Int!): Products
    updateCartQuantity(_id: ID!, name: String!, description: String!, image: String!, price: Int!, quantity: Int!): Products
  }
`;

module.exports = typeDefs;
