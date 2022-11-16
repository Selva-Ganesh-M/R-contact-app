import React from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";

function ContactList({ contacts }) {
  return (
    <div>
      <div className="ui celled list">
        {contacts.length !== 0
          ? contacts.map((contact) => (
              <ContactCard key={contact.id} contact={contact} />
            ))
          : null}
      </div>
      <Link to="/add">
        <button className="ui button blue right">Add Contact</button>
      </Link>
    </div>
  );
}

export default ContactList;
