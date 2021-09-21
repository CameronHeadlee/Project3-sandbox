import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
// import ItemsContainer from '../components/ItemsContainer';
import { useQuery } from "@apollo/client";
import { QUERY_ME } from '../utils/queries';
import UserView from '../components/UserView';
import ProductForm from '../components/ProductForm';

const styles = {
  container: {
    background: '#04B0BD',
    display: 'block',
    margin: '0 auto'
  },
  headerStyle: {
    textAlign: 'center',
    paddingTop: 25,
    textDecoration: 'underline wavy 8px #ffdd00'
    }
};

// the below line is the old code
const Closets = () => {

  const [userState, setUserState] = useState({});
  const {
    data, loading , error
  } = useQuery(QUERY_ME);
  if (data) console.log(data.me);
  return (
    <div style={styles.container}>
     <Container>
      <h2 style={styles.headerStyle}>My Closet</h2>
      <ProductForm/>
      {loading ? <div>Im loading...</div> : data.me ? <UserView/> : <></>}
      </Container>
     
    </div>
    
  )
}

export default Closets;