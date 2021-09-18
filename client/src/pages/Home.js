// import React from "react";
// import { useQuery } from '@apollo/client';
// import { QUERY_PRODUCTS } from '../utils/queries';
// import Container from 'react-bootstrap/Container';
// import ItemsContainer from '../components/ItemsContainer';
// import ReactPlayer from 'react-player';

// const styles = {
//   container: {
//     background: '#C20114',
//     display: 'block',
//     margin: '0 auto'
//   },
//   textStyle: {
//     fontSize: 25,
//     textAlign: 'center',
//     color: '#020202',
//     fontWeight: 'bold'
//   },
//   videoStyle: {
//     display: 'block',
//     margin: '0 auto'
//   },
//   headerStyle: {
//     fontSize: 45,
//     textAlign: 'center',
//     color: '#020202'
//   },
//   videoHeading: {
//     textAlign: 'center',
//     color: '#020202'
//   }
// }

// const Home = () => {
//   // Products
//   const {data, loading , error } = useQuery(QUERY_PRODUCTS);
//   if (error)
//   console.log(error);
//   return (
//     <div style={styles.container}>
//     <Container>
//       <h1 style={styles.headerStyle}>Welcome to The Latest Pick Up!</h1>
//       <p style={styles.textStyle}>At TheLPU our goal is to connect your passion for sneakers with others who feel the same. The Latest Pick Up is the place for you to show off and sell your shoes! Whether you just want the world to see what you have in your collection or you are trying to sell a pair TheLPU is here for you. As well as, being able to show off and sell you can also chat to others about their collection or anything sneaker related. Sneakerheads are hustlers and hustlers need a network. Join The Latest Pick Up to start copping and connecting.</p>
//       <h3 style={styles.videoHeading}>How Michael Jordan Changed Sneaker Culture in Chicago | Sole Origins</h3>
//       <ReactPlayer style={styles.videoStyle}
//         url="https://www.youtube.com/watch?v=1Wa5RpV1STg"
//       />
//       {loading 
//       ? <div>Im loading...</div>
//       : <ItemsContainer  data={data}/>}
//     </Container>
//     </div>
//   );
// };

// export default Home;
