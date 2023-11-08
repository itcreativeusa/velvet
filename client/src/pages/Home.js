import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";

import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <div className="container">
      <div className="container home"></div>
      <CategoryMenu />
      <ProductList />
      <Cart />
    </div>
  );
};

export default Home;
