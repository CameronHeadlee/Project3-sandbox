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

// export const QUERY_CLOSET = gql`
//   { closet {
//     _id
//   }}
// `;
// make a query called 'closet' and the user closet or the closet receives an id 