import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation createUser($user: String!, $email: String!, $password: String!) {
    createUser(user: $user, email: $email, password: $password) {
      user
      email
      password
    }
  }
`;


export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;





// "title": "Is this a loop?",
//       "question": "Pick your code and solve this",
//       "answer": "A",
//       "choices": ["A", "B", "C", "D"]