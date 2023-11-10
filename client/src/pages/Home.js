import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";

const Home = () => {
  return (
    <div className="main-content">
      {/* Hero Image (Jumbotron) */}
      <div className="jumbotron jumbotron-fluid">
        <div className="container position-relative">
          {/* Adding the Image */}
          <img
            src="/velvet5.png" // Adjust the path based on your project structure
            alt="Velvet Image"
            className="img-fluid"
          />

          {/* Text on Image */}
          <div className="text-on-image">
            <h1 className="display-4">Discover Your Style</h1>
            <h2 className="lead">Explore the Latest Fashion Trends</h2>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container home">
        <CategoryMenu />
        <ProductList />
        <Cart />
      </div>
    </div>
  );
};

export default Home;
