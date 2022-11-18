import uuid from "react-uuid";
import { api } from "../api/api";

const useFunctions = ({ contacts, setContacts }) => {
  console.log("useFunctions started running");
  const addContactHandler = async (contact) => {
    console.log("contact", contact);
    const response = await api.post("/contacts", { ...contact, id: uuid() });
    setContacts([...contacts, response.data]);
  };

  const handleDelete = async (id) => {
    await api.delete(`/contacts/${id}`);
    setContacts(
      contacts.filter((contact) => {
        return contact.id !== id;
      })
    );
  };

  console.log("useFunctions ran successfully");
  return { addContactHandler, handleDelete };
};

export default useFunctions;
