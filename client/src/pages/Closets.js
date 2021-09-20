import React from "react";
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
  return (
    <div style={styles.container}>
     <Container>
      <h2>My Closet</h2>
       <ItemsContainer/>
      </Container>
    </div>
    
  )
}

export default Closets;
