import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
    }
  }
`;

export const QUERY_PRODUCTS = gql`

    {  products {
      name
    }
  }
  
`;

