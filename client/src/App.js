import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Home from './pages/Home';
import Closets from './pages/Closets';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './components/Navbar';
import Header from './components/Header';
import UserContainer from './components/UserView';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ItemsContainer from './components/ItemsContainer';


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
      <Router>
        <div>
          <Header>
          <Navbar/>
          </Header>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route exact path='/Closets'>
          <Closets/>
          <UserContainer/>
        </Route>
        <Route exact path='/Login'>
          <Login/>
        </Route>
        <Route exact path='/Signup'>
          <Signup/>
        </Route>
        </div>
      </Router>
        
    </ApolloProvider>
  );
}

export default App;
