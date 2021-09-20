import React from "react";
// import { useQuery } from '@apollo/client';
// import { QUERY_PRODUCTS } from '../utils/queries';
import ReactPlayer from 'react-player';


const styles = {
  homeStyle: {
    backgroundColor: '#dc2f02',
    height: '100vh'
  },
  textStyle: {
    fontSize: 25,
    textAlign: 'center',
    color: '#020202',
    fontWeight: 'bold',
    marginRight: 15,
    marginLeft: 15
  },
  videoStyle: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100%',
    height: 'auto'
  },
  headerStyle: {
    fontSize: 45,
    textAlign: 'center',
    color: '#020202',
    paddingTop: 25
  },
  videoHeading: {
    textAlign: 'center',
    color: '#020202',
    paddingTop: 20,
    paddingRight: 15,
    paddingLeft: 15
  }
}




const Home = () => {
  
 
  return (
      <div style={styles.homeStyle}>
      <h1 style={styles.headerStyle}>Welcome to The Latest Pick Up!</h1>
      <p style={styles.textStyle}>At TheLPU our goal is to connect your passion for sneakers with others who feel the same. The Latest Pick Up is the place for you to show off and sell your shoes! Whether you just want the world to see what you have in your collection or you are trying to sell a pair TheLPU is here for you. As well as, being able to show off and sell you can also chat to others about their collection or anything sneaker related. Sneakerheads are hustlers and hustlers need a network. Join The Latest Pick Up to start copping and connecting.</p>
      <h3 style={styles.videoHeading}>How Michael Jordan Changed Sneaker Culture in Chicago | Sole Origins</h3>
      <ReactPlayer style={styles.videoStyle}
          url="https://www.youtube.com/watch?v=1Wa5RpV1STg"
        />
      </div>
  );
};

export default Home;
