import React, { useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { EventForm } from "./EventForm";
import AppContext from "../contexts/AppContext";
import { Events } from "./Events";
import { events } from "../events";

export const App = () => {
  const initialState ={
    events:[]
  }
  const [state, dispatch] = useReducer(events, initialState);
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
