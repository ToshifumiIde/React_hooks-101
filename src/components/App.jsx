import React, { useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { EventForm } from "./EventForm";
import AppContext from "../contexts/AppContext";
import { Events } from "./Events";
import reducer from "../reducers";

export const App = () => {
  const initialState = {
    events: [],
    operationLogs: [],
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  //今回の実装では第3引数は不要
  return (
    <>
      <AppContext.Provider value={{ state, dispatch }}>
        <div className="container-fluid">
          <EventForm />
          <Events />
        </div>
      </AppContext.Provider>
    </>
  );
};
