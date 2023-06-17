/* eslint-disable */

import { NavLink } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <nav className="navigation">
      <NavLink className={"link"} to="/">
        {" "}
        Home{" "}
      </NavLink>{" "}
      <NavLink className={"link"} to="/search-books">
        {" "}
        Search Books{" "}
      </NavLink>
    </nav>
  );
};

export default Header;
