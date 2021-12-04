import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation createUser($user: String!, $email: String!, $password: String!) {
    createUser(user: $user, email: $email, password: $password) {
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
      progress
    }
  }
`




// "title": "Is this a loop?",
//       "question": "Pick your code and solve this",
//       "answer": "A",
//       "choices": ["A", "B", "C", "D"]