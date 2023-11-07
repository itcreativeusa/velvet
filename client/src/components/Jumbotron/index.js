import React from "react";

// Add this line to import Bootstrap styles
import "bootstrap/dist/css/bootstrap.min.css";

function Jumbotron({ children }) {
  return (
    <div
      className="jumbotron text-center"
      style={{ height: "560px", paddingTop: "120px" }}
    >
      {children}
    </div>
  );
}

export default Jumbotron;
