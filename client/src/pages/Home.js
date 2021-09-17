import React from "react";
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../utils/queries';
import Container from 'react-bootstrap/Container';
import ItemsContainer from '../components/ItemsContainer';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {
  // Products
  const {data, loading , error } = useQuery(QUERY_PRODUCTS);
  if (error)
  console.log(error);
  return (
    <Container>
      <h1>Welcome!</h1>
      <p></p>
      {loading 
      ? <div>Im loading...</div>
      : <ItemsContainer data={data}/>}
    </Container>
  );
};

export default Home;
