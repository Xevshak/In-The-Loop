import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id 
        username
        email
        
      }
      
    }
  }
`;


export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id 
        username
        email
        progress{
          _id
        }
      }
    }
  }
`;


export const PROGRESS = gql`
  mutation progress($questionId: ID!, $userId: ID!){
    progress(questionId: $questionId, userId: $userId) {
      _id
      username
      progress {
        _id
        question
        title
        correct
      }
    }
  }
`




