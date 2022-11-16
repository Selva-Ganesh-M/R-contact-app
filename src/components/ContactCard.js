import React from "react";
import { Link } from "react-router-dom";

function ContactCard({ contact }) {
  const { id, title, email } = contact;
  return (
    <div className="item">
      <div className="content">
        <Link
          to={`/contact/${id}`}
          state={{
            contact: contact,
          }}
        >
          <div className="header">{title}</div>
          <div>{email}</div>
        </Link>
        <Link to={`/contact/delete/${id}`} state={contact}>
          <i className="trash right red outline alternate icon"></i>
        </Link>
      </div>
    </div>
  );
}

export default ContactCard;
