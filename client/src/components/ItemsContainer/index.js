import React from 'react';
import  Card  from 'react-bootstrap/Card';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import ListGroup from 'react-bootstrap/ListGroup';

export default function ItemsContainer (props) {
    // console.log(props.data?.products); 
      return (
        <div className="d-flex align-content-center justify-content-between flex-wrap" >
        {props.data?.products.map( product => {
          console.log(product)
          return <Card className="row p-5 m-5" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={product.image} />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>
              {product.description}
          </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Price: {product.price}</ListGroupItem>
            <ListGroupItem>In Stock: {product.quantity}</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">My Closet</Card.Link>
          </Card.Body>
        </Card>
        
        }) 
        }
       </div>
       
        
     
    )
  }   