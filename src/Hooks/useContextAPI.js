import { useContext } from "react";
import { contextAPI } from "../context/allContext";

const useContextAPI = () => {
  return useContext(contextAPI);
};

export default useContextAPI;
