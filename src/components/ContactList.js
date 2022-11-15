import React from "react";
import ContactCard from "./ContactCard";

function ContactList({ contacts }) {
  return (
    <div className="ui celled list">
      {contacts.length !== 0
        ? contacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))
        : null}
    </div>
  );
}

export default ContactList;
