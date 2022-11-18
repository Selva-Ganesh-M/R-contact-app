import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import ContactDetails from "./components/ContactDetails";
import DeleteContact from "./components/DeleteContact";
import EditContact from "./components/EditContact";

import "./App.css";
import useFetch from "./customHooks/useFetch";
import useFunctions from "./customHooks/useFunctions";

export const OverAllContext = React.createContext();

function App() {
  // declararions
  const [contacts, setContacts] = useState([]);

  // custom hooks usage
  // fetching data
  useFetch({ contacts, setContacts });
  // receiving necessery functions
  const { addContactHandler, handleDelete } = useFunctions({
    contacts,
    setContacts,
  });

  // returning jsx
  return (
    <OverAllContext.Provider
      value={{ addContactHandler, handleDelete, contacts, setContacts }}
    >
      <div className="ui container">
        <Router>
          <Header />
          <Routes>
            {/* /add route */}
            <Route
              path="/add"
              exact
              element={<AddContact addContactHandler={addContactHandler} />}
            />
            {/* Home route */}
            <Route
              path="/"
              exact
              element={<ContactList contacts={contacts} />}
            />
            {/* contact details route */}
            <Route path="/contact/:id" exact element={<ContactDetails />} />
            {/* contact delete route */}
            <Route
              path="/contact/delete/:id"
              exact
              element={<DeleteContact handleDelete={handleDelete} />}
            />
            {/* contact edit route */}
            <Route path="/contact/edit/:id" exact element={<EditContact />} />
          </Routes>
        </Router>
      </div>
    </OverAllContext.Provider>
  );
}

export default App;
