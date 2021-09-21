import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      products {
        _id
        name
        description
        image
        price
        quantity
      }
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
    quantity
    userId {
      _id
      username
      email
    }
    }
  }
`;
export const QUERY_CLOSET = gql`
  { closet
    {
    _id
    }
}
`;