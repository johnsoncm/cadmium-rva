import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import Image from '../images/cadmium-images/logo.png'

const styles = {
  backgroundStyle:{
    backgroundImage: ''
  }
}

const Home = () => {
  return (
    <div className="container">
      {/* <CategoryMenu />
      <ProductList />
      <Cart /> */}

      <h1>Hello</h1>
      <img src={Image} alt="logo"/>

    </div>
  );
};

export default Home;
