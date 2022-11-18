import React, { useEffect, useState } from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";

function ContactList({ contacts }) {
  const [renderedContacts, setRenderedContacts] = useState([]);
  const [srcValue, setSrcValue] = useState("");

  useEffect(() => setRenderedContacts(contacts), [contacts]);

  useEffect(() => {
    setRenderedContacts(
      contacts.filter((item) => {
        return Object.values(item).join("").includes(srcValue);
      })
    );
  }, [srcValue]);

  return (
    <div style={{ padding: "1em" }}>
      <h2>Contact List</h2>
      <div className="ui search" style={{ marginBottom: "1em" }}>
        <div className="ui icon input">
          <input
            type="text"
            placeholder="Search contact"
            value={srcValue}
            onChange={(e) => setSrcValue(e.target.value)}
            className="prompt"
          />
          <i className="search red icon"></i>
        </div>
      </div>
      <Link to="/add">
        <button
          className="ui button blue right"
          style={{ marginBottom: "1em", marginLeft: "80%" }}
        >
          Add New Contact
        </button>
      </Link>
      <div className="ui celled list">
        {renderedContacts.length !== 0 ? (
          renderedContacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))
        ) : (
          <h3>Sorry, no contacts to display</h3>
        )}
      </div>
    </div>
  );
}

export default ContactList;
