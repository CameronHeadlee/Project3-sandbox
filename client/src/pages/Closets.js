import React from "react";
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../utils/queries';
import Container from 'react-bootstrap/Container';
import ItemsContainer from '../components/ItemsContainer/index';
import { Link } from 'react-router-dom';
//import Card from "react-bootstrap/Card";

const styles = {
  container: {
    background: '#C20114',
    display: 'block',
    margin: '0 auto'
  }
};



// the below line is also new code
// export default function Closets (props) {
//   const {data} = useQuery(QUERY_PRODUCTS);
//   return (
//     <div style={styles.container}> 
//    <Container>
//        <Link to="/closets">
//          <h2>My Closet</h2>
//          {/* <ItemsContainer> */}
//            <p>hi</p>
//            {props.data?.products.map( product =>{
//              console.log(product);
//              console.log(data);
//              return (
//                <Card.Body>
//                  <Card.Text>
                   
//                <input data={data} /> 
//                  </Card.Text>
//                </Card.Body>
//                )
//            } )}
//          {/* </ItemsContainer> */}
        
//        </Link>
//        </Container>
//      </div>
//   )
// }

// the below line is the new code
// const Closets = () => {
//   const { data } = useQuery(QUERY_PRODUCTS);
//   return (
//     <div style={styles.container}> 
//     <Container>
//       <Link to="/closets">
//         <h2>My Closet</h2>
//         <ItemsContainer>
//           <input data={data} />
//         </ItemsContainer >
        
//       </Link>
//       </Container>
//     </div>
//   )
// }

// the below line is the old code
const Closets = () => {
  // Products
  const {data, loading } = useQuery(QUERY_PRODUCTS);
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