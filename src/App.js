import uuid from "react-uuid";
import "./App.css";
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import React, { useEffect, useState } from "react";

export const deleteContext = React.createContext();
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
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <deleteContext.Provider value={{ handleDelete }}>
        <ContactList contacts={contacts} />
      </deleteContext.Provider>
    </div>
  );
}

export default App;
