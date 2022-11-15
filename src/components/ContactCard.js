import React from "react";

function ContactCard({ contact }) {
  return (
    <div className="item">
      <div className="content">
        <div className="header">{contact.title}</div>
        <div>{contact.email}</div>
        <i className="trash alternate outline icon"></i>
      </div>
    </div>
  );
}

export default ContactCard;
