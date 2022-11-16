import React, { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";

const DeleteContact = ({ handleDelete }) => {
  const { state: contact } = useLocation();
  const [homeNavigation, setHomeNavigation] = useState(false);
  return (
    <div>
      <ContactCard contact={contact} />
      <h1>Are you sure want to delete this contact</h1>
      <button
        onClick={() => {
          handleDelete(contact.id);
          setHomeNavigation(true);
        }}
        className="ui button outline"
      >
        Sure
      </button>
      <Link to={"/"}>
        <button className="ui button blue">Go back</button>
      </Link>
      {homeNavigation && <Navigate to="/" replace={true} />}
    </div>
  );
};

export default DeleteContact;
