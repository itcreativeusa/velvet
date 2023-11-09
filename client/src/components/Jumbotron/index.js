import React from "react";

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
