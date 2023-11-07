import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

export default function Footer(props) {
  return (
    <footer className={`footer ${props.darkMode ? "dark" : ""}`}>
      <small>© 2023 Velvet</small>
    </footer>
  );
}
