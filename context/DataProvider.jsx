import React, { createContext, useState } from "react";
import { useContext } from "react";

const datacontext = createContext();

const DataProvider = ({ children }) => {
  const [loggedUser, setLoggedUser] = useState("");
  const server = "https://flipkart-iim1.onrender.com";
  // const server = "http://localhost:5000";

  return (
    <>
      <datacontext.Provider value={{ loggedUser, setLoggedUser, server }}>
        {children}
      </datacontext.Provider>
    </>
  );
};
export const DataState = () => {
  return useContext(datacontext);
};
export default DataProvider;

// how to create context api
// 1.import createContext and useContext from react
//2.wrap whole application in created context
// 3. provide value to children useing Provider
