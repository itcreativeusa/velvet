import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";

// Home page
const Home = () => {
  return (
    <div className="container-fluid">
      {/* Hero Image (Jumbotron) */}
      <div className="jumbotron jumbotron-fluid hero-image">
        {/* Text on Image */}
        <></>
        <h1 className="display-4">Discover Your Style</h1>
        <p className="lead">Explore the Latest Fashion Trends</p>
      </div>
      {/* Main Content */}
      <div className="container-fluid">
        <CategoryMenu />
        <ProductList />
        <Cart />
      </div>
    </div>
  );
};

export default Home;
