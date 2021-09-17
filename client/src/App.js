import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
  useQuery,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import  ItemsContainer  from './components/ItemsContainer'
import Container from 'react-bootstrap/Container'
import{ QUERY_PRODUCTS } from './utils/queries'
import Home from './pages/Home';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {

  return (
  <ApolloProvider client={client}>
      <Home/>
   </ApolloProvider>
  );
}

export default App;
