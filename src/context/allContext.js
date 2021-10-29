import React, { createContext } from "react";

export const contextAPI = createContext();

const allContext = ({ children }) => {
  return <contextAPI.Provider value="sagar">{children}</contextAPI.Provider>;
};

export default allContext;
