import React from "react";
import { Link, useLocation } from "react-router-dom";

const ContactDetails = (props) => {
  const { state } = useLocation();
  const mt5 = {
    marginTop: "1em",
  };
  return (
    <div className={mt5}>
      <div className="ui card centerd">
        <div className="content">
          <div className="header">{state.contact.name}</div>
          <div className="description">{state.contact.email}</div>
        </div>
      </div>
      <Link to="/">
        <button className="ui button blue">All Contacts</button>
      </Link>
    </div>
  );
};

export default ContactDetails;
