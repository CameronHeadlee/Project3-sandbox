import React from 'react';
import  Card  from 'react-bootstrap/Card';
import  Button  from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function ItemsContainer (props) {
    console.log(props.data.products); 
    return (
      <Row xs={1} md={2} className="g-4">
        {props.data.products.map( product => {
          console.log(product)
          return <Col> <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={product.image} />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>
              {product.description}
              {product.price}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        </Col>
        }) 
        }
        </Row>
    )
  }   
      
      
      
    


