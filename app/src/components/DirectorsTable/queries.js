import { gql } from 'apollo-boost';

export const directorsQuery = gql`
  query directorsQuery {
    directorList {
      id
      name
      age
      movies {
        name
        id
      }
    }
  }
`;