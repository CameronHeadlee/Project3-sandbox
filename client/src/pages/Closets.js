import React from "react";
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../utils/queries';
import Container from 'react-bootstrap/Container';
import ItemsContainer from '../components/ItemsContainer/index';
import { Link } from 'react-router-dom';
//import Card from "react-bootstrap/Card";
//import ItemsContainer from '../components/ItemsContainer';

const styles = {
  container: {
    background: '#C20114',
    display: 'block',
    margin: '0 auto'
  }
};

// the below line is the old code
const Closets = () => {
  // Products
  const {data, loading, error } = useQuery(QUERY_PRODUCTS);
  // if (error)
  // console.log(error);
  return (
    <Link to="/closets">
      <h2>My Closet</h2>
    <div style={styles.container}>
      <Container>
      {loading 
      ? <div>Im loading...</div>
      : <ItemsContainer data={data}/>}
      </Container>
    </div>
    </Link>
  )
}

export default Closets;