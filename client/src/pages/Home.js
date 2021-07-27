import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import Image from '../images/cadmium-images/logo.png';
import { Link } from 'react-router-dom';

const styles = {
  backgroundStyle:{
    backgroundImage: ''
  }
}

const Home = () => {
  return (
    <div className="container" >
      {/* <CategoryMenu />
      <ProductList />
      <Cart /> */}


      <img src={Image} alt="logo"/>

      <div className="container my-1">
      <Link to="/signup">← Go to Signup</Link>

      <h2>Login</h2>
      </div>
      <div className="container my-1">
      <Link to="/login">← Go to Login</Link>

      <h2>Signup</h2>
      </div>

    </div>
  );
};

export default Home;
