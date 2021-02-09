import React from "react";
import { NavLink } from "react-router-dom";

export const HomePage: React.FC = () => {
  return (
    <div className="page-wrapper">
      HomePage
      <NavLink to="/">
        <i className="fa fa-times close-button"></i>
      </NavLink>
    </div>
  );
};
