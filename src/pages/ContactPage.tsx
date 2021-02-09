import React from "react";
import { NavLink } from "react-router-dom";

export const ContactPage: React.FC = () => {
  return (
    <div className="page-wrapper">
      <h2>Contacts</h2>
      <img src="https://www.mapquestapi.com/staticmap/v5/map?key=KEY&center=Perugia&size=1100,500@2x" alt=""/>
      <NavLink to="/">
        <i className="fa fa-times close-button"></i>
      </NavLink>
    </div>
  );
};
