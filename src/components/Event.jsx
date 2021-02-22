import React, { useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { events } from "../reducers/index";

export const Event = ({ event, dispatch }) => {
  const id = event.id;
  const handleClickEventButton = () => {
    dispatch({ type: "DELETE_EVENT", id });
  };
  return (
    <tr>
      <td>{id}</td>
      <td>{event.title}</td>
      <td>{event.body}</td>
      <td>
        <button className="btn btn-danger" onClick={handleClickEventButton}>
          削除
        </button>
      </td>
    </tr>
  );
};
