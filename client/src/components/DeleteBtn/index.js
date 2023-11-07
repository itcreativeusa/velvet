import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function DeleteBtn(props) {
  return (
    <button {...props} className="btn btn-danger" role="button" tabIndex="0">
      ✗
    </button>
  );
}

export default DeleteBtn;
