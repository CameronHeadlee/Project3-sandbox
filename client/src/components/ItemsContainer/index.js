import React from 'react';
import  Card  from 'react-bootstrap/Card';
import  Button  from 'react-bootstrap/Button'
export default function ItemsContainer () {
    return (
        <>
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://swoo.sh/2XrMVGY" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Item
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
  
        </>
    )
}

