const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    firstName: String
    lastName: String
    username: String!
    email: String
    orders: [Order]
  }

  type Comment { 
    _id: ID
    commentText: String
    
  }

  type Product { 
    _id: ID
    name: String
    description: String
    image: String
    price: Float
    category: Category 
  }

  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
  }

  type Checkout{
    session: ID
  }

  type Auth {
    token: ID!
    user: User
  }


  type Query {
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    me: User
    order(_id: ID!): order
    checkout(products: [ID]!): Checkout
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(firstName: String! lastName: String! username: String!, email: String!, password: String!): Auth
    addOrder(products: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateProduct(_id: ID!, quantity: Int!): Product

   
  }
`;

module.exports = typeDefs;
