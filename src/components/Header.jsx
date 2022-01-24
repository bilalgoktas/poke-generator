import React from "react";

const Header = ({ onClick }) => {
  return (
    <div>
      <h1>Random Pokemon</h1>
      <button onClick={onClick}>Bring it in!</button>
    </div>
  );
};

export default Header;
