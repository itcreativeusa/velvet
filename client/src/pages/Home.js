import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";

import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <div className="container mt-5">
      <img src="./images/velvet.jpg" alt="velvet" className="img-fluid" />

      <CategoryMenu />

      <ProductList />
      <Cart />
    </div>
  );
};

export default Home;
