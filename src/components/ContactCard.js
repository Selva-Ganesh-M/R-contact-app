import React, { useContext } from "react";
import { deleteContext } from "../App";

function ContactCard({ contact }) {
  const { id, title, email } = contact;
  const { handleDelete } = useContext(deleteContext);
  return (
    <div className="item">
      <div className="content">
        <div className="header">{title}</div>
        <div>{email}</div>
        <i
          onClick={() => handleDelete(id)}
          className="trash alternate outline icon"
        ></i>
      </div>
    </div>
  );
}

export default ContactCard;
