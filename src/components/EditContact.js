import React, { useContext, useEffect, useRef, useState } from "react";
import { useLocation, Navigate } from "react-router-dom";
import GoHome from "./GoHome";
import { api } from "../api/api";
import { OverAllContext } from "../App";

const EditContact = () => {
  const inputRef = useRef(null);
  const { setContacts, contacts } = useContext(OverAllContext);
  const { state: contact } = useLocation();
  const receivedContact = contact;

  const [editedContact, setEditedContact] = useState(contact);
  const [shouldRoute, setShouldRoute] = useState(false);

  const inputStyle = {
    fontSize: "1.5em",
    border: "none",
    borderBottom: "2px solid whitesmoke",
    padding: "0.5em",
    outline: "none",
    marginBottom: "1em",
  };

  const handleFormSubmission = async (e) => {
    e.preventDefault();

    const response = await api.put(`/contacts/${contact.id}`, editedContact);

    const temp = contacts.filter((item) => item.id !== contact.id);
    setContacts([...temp, response.data]);

    console.log(contacts);
    setShouldRoute(true);
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <form onSubmit={handleFormSubmission}>
        <label style={inputStyle}>Name:</label>
        <input
          ref={inputRef}
          style={inputStyle}
          onChange={(e) =>
            setEditedContact({ ...editedContact, name: e.target.value })
          }
          type="text"
          name="name"
          value={editedContact.name}
        />
        <br />
        <label style={inputStyle}>Email:</label>
        <input
          style={inputStyle}
          onChange={(e) =>
            setEditedContact({ ...editedContact, email: e.target.value })
          }
          type="email"
          name="email"
          value={editedContact.email}
        />
        <br />
        <button
          style={{ marginBottom: "1em", display: "inline" }}
          className="ui button blue"
          type="submit"
        >
          Submit
        </button>
      </form>
      <GoHome />
      {shouldRoute && <Navigate to="/" replace={true} />}
    </div>
  );
};

export default EditContact;
