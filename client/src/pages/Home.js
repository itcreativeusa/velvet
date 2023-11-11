import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";

const Home = () => {
  return (
    <div className="container-fluid">
      {/* Hero Image (Jumbotron) */}
      <div className="jumbotron jumbotron-fluid">
        {/* Make Image wider */}
        {/* <div className="container position-relative">*/}
        {/* Adding the Image */}
        <img
          src="/velvet.png" // Image bg path
          alt="Velvet Image"
          className="img-fluid"
        />

        {/* Text on Image */}
        <div className="text-on-image">
          <h1 className="display-4">Discover Your Style</h1>
          <h2 className="lead">Explore the Latest Fashion Trends</h2>
        </div>
        {/* </div>*/}
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
