import React from "react";
import { NavLink } from "react-router-dom";

export const CatalogPage: React.FC = () => {
  return (
    <div className="page-wrapper">
      CatalogPage
      <NavLink to="/">
        <i className="fa fa-times close-button"></i>
      </NavLink>
    </div>
  );
};
