import React, { useContext } from "react";
import { DELETE_EVENT } from "../actions";
import AppContext from "../contexts/AppContext";

export const Event = ({ event }) => {
  const { dispatch } = useContext(AppContext);
  const id = event.id;
  const handleClickDeleteButton = () => {
    const result = window.confirm(
      `本当にid:${id}のイベントを削除してもよろしいですか？`
    );
    if (result) {
      dispatch({ type: DELETE_EVENT, id });
    }
  };
  return (
    <tr>
      <td>{id}</td>
      <td>{event.title}</td>
      <td>{event.body}</td>
      <td>
        <button className="btn btn-danger" onClick={handleClickDeleteButton}>
          削除
        </button>
      </td>
    </tr>
  );
};
