const { gql } = require('apollo-server-express');

const typeDefs = gql`
# cateogry is day of the week?
  type Category {
    _id: ID
    day: String
  }

  type Event {
    _id: ID
    name: String!
    description: String
    locationName: String!
    locationAddress: String!
    time: String!
    date: String!
    image: String
    link: String
    category: Category
  }

  type List {
    _id: ID
    savedDate: String
    events: [Event]
  }

  type User {
    _id: ID
    username: String
    email: String
    lists: [List]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [Category]
    events(category: ID, name: String): [Event]
    event(_id: ID!): Product
    user: User
    list(_id: ID!): List
    # we don't need checkout but maybe we can still play with this
    checkout(events: [ID]!): Checkout
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addList(events: [ID]!): List
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateList(_id: ID!): Event
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;