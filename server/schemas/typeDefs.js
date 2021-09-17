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
    commentAuthor: String
  }

  type Products { 
    _id: ID
    name: String
    description: String
    image: String
    price: Float
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
    product(_id: ID!): Products
    me: User
    order(_id: ID!): Order
    checkout(product: [ID]!): Checkout
    comments(username: String): [Comment]
    comment(commentId: ID!): Comment
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(firstName: String! lastName: String! username: String!, email: String!, password: String!): Auth
    addOrder(product: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String): User
<<<<<<< HEAD
    updateProducts(_id: ID!, quantity: Int!): Product
=======
    updateProduct(_id: ID!, quantity: Int!): Products
>>>>>>> f019eabb6d46e825da14157c622aaa7124550ad5
  }
`

module.exports = typeDefs;
