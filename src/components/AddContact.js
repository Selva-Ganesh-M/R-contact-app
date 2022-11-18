import React, {
  Component,
  useState,
  useContext,
  useRef,
  useEffect,
} from "react";
import { Link, Navigate } from "react-router-dom";
import { OverAllContext } from "../App";

const AddContact = ({ addContactHandler }) => {
  const inputRef = useRef(null);
  const [contact, setContact] = useState({
    name: "",
    email: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const addContact = (e) => {
    console.log("form got submitted...");
    setIsLoading(true);
    e.preventDefault();
    if (contact.name === "" || contact.email === "") {
      setIsLoading(false);
      return;
    } else {
      addContactHandler(contact);
      setContact({ name: "", email: "" });
      setIsLoading(false);
      setRedirect(true);
    }
  };
  const { contacts } = useContext(OverAllContext);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="ui main">
      <h2>Create Contact</h2>
      <form className="ui form" onSubmit={addContact}>
        <div className="field">
          <label>Name:</label>
          <input
            ref={inputRef}
            type="text"
            name="name"
            placeholder="name"
            onChange={(e) =>
              setContact({
                ...contact,
                name: e.target.value,
              })
            }
            value={contact.name}
          />
        </div>
        <div className="field">
          <label>Email:</label>
          <input
            type="text"
            name="email"
            placeholder="email"
            onChange={(e) =>
              setContact({
                ...contact,
                email: e.target.value,
              })
            }
            value={contact.email}
          />
        </div>
        {isLoading && "Loading..."}
        {!isLoading && (
          <button type="submit" className="ui button blue">
            Add
          </button>
        )}
        <Link to="/">
          <button className="ui button blue right">Home</button>
        </Link>
      </form>

      {redirect && <Navigate to="/" replace={true} />}
    </div>
  );
};

export default AddContact;
