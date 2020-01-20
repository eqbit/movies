import { gql } from 'apollo-boost';

export const moviesQuery = gql`
  query moviesQuery {
    movieList {
      id
      name
      genre
      watched
      rate
      director {
        name
        id
      }
    }
  }
`;