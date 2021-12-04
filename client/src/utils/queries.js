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



// export const QUERY_QUESTION = gql`
//   query question {
//     question {
//       _id
//       title
//       question
//     }
//   }
// `;

// export const QUERY_USER = gql`
//   query matchups($_id: String) {
//     matchups(_id: $_id) {
//       _id
//       question1
//       question2
//       question1_votes
//       question2_votes
//     }
//   }
// `;


// "title": "Is this a loop?",
//       "question": "Pick your code and solve this",
//       "answer": "A",
//       "choices": ["A", "B", "C", "D"]