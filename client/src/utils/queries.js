import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      progress {
        _id
        title
        question
        correct
      }
    }
  }
`;
