import React from 'react';
import  Card  from 'react-bootstrap/Card';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import ListGroup from 'react-bootstrap/ListGroup';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../../utils/queries';
<<<<<<< HEAD
import ShoeBackground from "../ShoeBackground"

const styles = {
  containerStyles: {
    background: '#04B0BD',
  },
  shoeContainer: {
     position: "relative"
=======
import Button from 'react-bootstrap/Button';


const styles = {
  headerStyle: {
  color: '#020202',
  textAlign: 'center',
  textDecoration: 'underline',
  paddingTop: 25
>>>>>>> main
  }
};

export default function ItemsContainer () {
  const {data, loading , error } = useQuery(QUERY_PRODUCTS);
    if (loading) return <div>Im loading...</div>;
      return (
<<<<<<< HEAD
         <Card styles={styles.containerStyles}>
           <ShoeBackground />
          <Card.Title>On the market</Card.Title>
        <div className="d-flex align-content-center justify-content-between  flex-wrap" style={styles.shoeContainer}>
=======
        <div>
          <div style={styles.headerStyle}>
            <h1>On the market</h1>
          </div>
        <div className="d-flex justify-content-center flex-wrap" >
>>>>>>> main
        {data?.products.map( product => {
          return <Card className="row p-1 m-1" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={product.image} />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>
              <details>
                <summary>Description</summary>
              {product.description}
              </details>
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <details>
              <summary>Shoe Details</summary>
            <ListGroupItem>Price: {product.price}</ListGroupItem>
            <ListGroupItem>In Stock: {product.quantity}</ListGroupItem>
            </details>
          </ListGroup>
          <Button as="input" type="button" value="Purchase" />{' '}
        </Card>
         
        }) 
        }
        </div>
      </div>
    )
  }   