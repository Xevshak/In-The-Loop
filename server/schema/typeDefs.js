const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
     _id: ID!
     email: String!
     username: String!
     progress: [Question]
    }

    type Question {
     _id: ID!
     question: String
     correct: Boolean
     title: String!
    }

    type Auth {
     token: ID!
     user: User
    }

    type Query {
     me: User
    }

    type Mutation {
     login(email: String!, password: String!): Auth
     addUser(username: String!, email: String!, password: String!): Auth
     progress(questionId: ID!, userId: ID! ): User
    }
`;
    module.exports = typeDefs;