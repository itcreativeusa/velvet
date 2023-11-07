import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import Nav from "../components/Nav";

import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <div className="container mt-5">
      <img
        id="mainPhoto"
        src="./images/velvet.jpg"
        alt="velvet"
        className="img-fluid"
      />
      <Nav />
      <CategoryMenu />

      <ProductList />
      <Cart />
    </div>
  );
};

export default Home;
