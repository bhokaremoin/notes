import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Developed By : Moin Bhokare | Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
