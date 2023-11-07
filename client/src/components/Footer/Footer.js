import React from "react";

export default function Footer(props) {
  return (
    <footer className={props.darkMode ? "dark footer" : ""}>
      <small>© 2023 Velvet</small>
    </footer>
  );
}
