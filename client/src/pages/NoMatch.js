import React from "react";
import Jumbotron from "../components/Jumbotron";

// Add this line to import Bootstrap styles
import "bootstrap/dist/css/bootstrap.min.css";

const NoMatch = () => {
  return (
    <div className="container mt-5">
      <Jumbotron>
        <h1>404 Page Not Found</h1>
        <h1>
          <span role="img" aria-label="Face With Rolling Eyes Emoji">
            🙄
          </span>
        </h1>
      </Jumbotron>
    </div>
  );
};

export default NoMatch;
