import { useContext } from "react";
import { contextAPI } from "../context/allContext";

const useContextAPI = () => {
  useContext(contextAPI);
};

export default useContextAPI;
