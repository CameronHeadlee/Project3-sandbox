import React from "react";
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../utils/queries';
import Container from 'react-bootstrap/Container';
import ItemsContainer from '../components/ItemsContainer';

const styles = {
  container: {
    background: '#C20114',
    display: 'block',
    margin: '0 auto'
  }
}

const Closets = () => {
  // Products
  const {data, loading , error } = useQuery(QUERY_PRODUCTS);
  if (error)
  console.log(error);
  return (
    <div style={styles.container}>
      <Container>
      {loading 
      ? <div>Im loading...</div>
      : <ItemsContainer  data={data}/>}
      </Container>
    </div>
  )
}
