import React, { useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { EventForm } from "./EventForm";
import { reducer } from "../reducers/index";
import { Events } from "./Events";

export const App = () => {
  const [state, dispatch] = useReducer(reducer, []);
  //今回の実装では第3引数は不要
  return (
    <>
      <div className="container-fluid">
        <EventForm state={state} dispatch={dispatch} />
        <Events state={state} dispatch={dispatch} />
      </div>
    </>
  );
};
