import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import uuid from "react-uuid";

import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import ContactDetails from "./components/ContactDetails";
import DeleteContact from "./components/DeleteContact";

import "./App.css";

function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem("contacts"))
  );

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContactHandler = (contact) => {
    setContacts([...contacts, { ...contact, id: uuid() }]);
  };

  const handleDelete = (id) => {
    setContacts(
      contacts.filter((contact) => {
        return contact.id !== id;
      })
    );
  };

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/add"
            exact
            element={<AddContact addContactHandler={addContactHandler} />}
          />
          <Route path="/" exact element={<ContactList contacts={contacts} />} />
          <Route path="/contact/:id" exact element={<ContactDetails />} />
          <Route
            path="/contact/delete/:id"
            exact
            element={<DeleteContact handleDelete={handleDelete} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
