import React, { useState } from "react";
import { Link } from "react-router-dom";

function ContactCard({ contact }) {
  const [isHover, setIsHover] = useState(false);
  const { id, name, email } = contact;
  const inlineStyles = {
    cardStyle: {
      padding: "0.5em",
      fontSize: "1.5em",
      position: "relative",
      marginBottom: "1em",
      boxShadow: isHover
        ? "2px 2px 5px 3px rgba(0, 0, 0, 0.2)"
        : "2px 2px 5px rgba(0, 0, 0, 0.2)",
      borderRadius: "10px",
    },
  };

  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      style={inlineStyles.cardStyle}
    >
      <div className="content">
        <Link
          to={`/contact/${id}`}
          state={{
            contact: contact,
          }}
        >
          <h1 className="header">{name}</h1>
          <div>{email}</div>
        </Link>
        <Link to={`/contact/delete/${id}`} state={contact}>
          <i
            style={{
              position: "absolute",
              fontSize: "1.5em",
              marginLeft: "95%",
            }}
            className="trash right red outline alternate icon"
          ></i>
        </Link>
        <Link to={`/contact/edit/${id}`} state={contact}>
          <i
            style={{ marginLeft: "93%", fontSize: "1.5em" }}
            className="edit right blue outline icon"
          ></i>
        </Link>
      </div>
    </div>
  );
}

export default ContactCard;
