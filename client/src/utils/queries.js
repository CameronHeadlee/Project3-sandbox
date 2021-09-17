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
  { products { 
  	_id
    name
    description
    image
    price
		}
  }
`;
