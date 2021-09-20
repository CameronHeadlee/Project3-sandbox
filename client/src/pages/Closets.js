import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import ItemsContainer from '../components/ItemsContainer';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import { UserView } from '../components/UserView';

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
  const[userState, setUserState] = useState({});
  const{ 
    data, loading, error
  } = useQuery(QUERY_ME)
  if (data) console.log(data.me);
  return (
    <div style={styles.container}>
     <Container>
      <h2>My Closet</h2>
      {loading ? <div>I'm loading...</div> : data.me ? <UserView/> : <></>}
       <ItemsContainer/>
      </Container>
     
    </div>
    
  )
}

export default Closets;