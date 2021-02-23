import React, { useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { EventForm } from "./EventForm";
import AppContext from "../contexts/AppContext";
import { Events } from "./Events";
import { reducer } from "../reducers";

console.log(AppContext);

export const App = () => {
  const [state, dispatch] = useReducer(reducer, []);
  //今回の実装では第3引数は不要
  return (
    <>
    <AppContext.Provider value={"hello I'm a provider. "}>
      <div className="container-fluid">
        <EventForm state={state} dispatch={dispatch} />
        <Events state={state} dispatch={dispatch} />
      </div>
    </AppContext.Provider>
    </>
  );
};

