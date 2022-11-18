import { useState, useEffect } from "react";
import { api } from "../api/api";

const useFetch = ({ contacts, setContacts }) => {
  console.log("usefetch started running");
  useEffect(() => {
    // initial render
    const getData = async () => {
      const tempContacts = await api.get("/contacts");
      if (tempContacts) {
        setContacts(tempContacts.data);
      }
    };
    getData();
  }, []);
  console.log("usefetch ran successfully");
};

export default useFetch;
