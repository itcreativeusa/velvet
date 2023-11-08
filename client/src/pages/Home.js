import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";

import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <div>
      <div className="full-width-image-bg"></div>
      <div className="container home">
        <CategoryMenu />
        <ProductList />
        <Cart />
      </div>
    </div>
  );
};

export default Home;
