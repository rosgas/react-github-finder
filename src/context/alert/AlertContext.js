import { createContext, useReducer } from "react";
import GitHubContext from "../github/GitHubContext";
import alertReducer from "./AlertReducer";

const AlertContex = createContext();

export const AlertProvider = ({ children }) => {
  const initialState = null;

  const [state, dispatch] = useReducer(alertReducer, initialState);

  const setAlert = (msg, type) => {
    dispatch({
      type: "SET_ALERT",
      payload: { msg, type },
    });

    setTimeout(() => dispatch({ type: "REMOVE_ALERT" }), 3000);
  };

  return (
    <GitHubContext.Provider value={{ alert: state, setAlert }}>
      {children}
    </GitHubContext.Provider>
  );
};

export default AlertContex;
