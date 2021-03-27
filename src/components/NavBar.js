import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  let location = useLocation();
  return (
    <div className="NavBar">
      <div className={location.pathname === "/" ? "NavItem active" : "NavItem"}>
        <Link to="Section1">SECTION1</Link>
      </div>
      <div
        className={
          location.pathname === "/Section2" ? "NavItem active" : "NavItem"
        }
      >
        <Link to="/Section2">SECTION2</Link>
      </div>
      <div
        className={
          location.pathname === "/Section3" ? "NavItem active" : "NavItem"
        }
      >
        <Link to="/Section3">SECTION3</Link>
      </div>
      <div
        className={
          location.pathname === "/Section4" ? "NavItem active" : "NavItem"
        }
      >
        <Link to="/Section4">SECTION4</Link>
      </div>
    </div>
  );
}
