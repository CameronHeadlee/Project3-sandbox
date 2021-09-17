import React from "react";
// import ProductList from "../components/ProductList";
// import CategoryMenu from "../components/CategoryMenu";
// import Cart from "../components/Cart";
import { useQuery } from '@apollo/client/link/context';
import { QUERY_PRODUCTS } from '../utils/queries';
import Container from 'react-bootstrap/Container';
import ItemsContainer from '../components/ItemsContainer';

const Home = () => {
  //Products
  const {data, loading, error } = useQuery(QUERY_PRODUCTS);
  if (error)
    console.log(error);
  if (data)
    console.log(data);

    return(
      <Container>
        { loading
        ? <div>I'm loading...</div>
          : <ItemsContainer data={data}/>}
      </Container>
    )
};

export default Home;
