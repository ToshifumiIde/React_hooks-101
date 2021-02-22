import React, { useState, useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { events } from "../reducers/index";
import { Event } from "./Event";

export const App = () => {
  const [state, dispatch] = useReducer(events, []);
  //今回の実装では第3引数は不要
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addEvent = (e) => {
    e.preventDefault();
    console.log("add event");
    console.log(title, body);
    dispatch({
      type: "CREATE_EVENT",
      title,
      body,
    });
    setTitle("");
    setBody("");
  };

  console.log(state);

  return (
    <div className="container-fluid">
      <h4>イベント作成フォーム</h4>
      <form action="">
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input
            autoFocus
            type="text"
            className="form-control"
            id="formEventTitle"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="formEventBody">ボディ</label>
          <textarea
            type="text"
            className="form-control"
            id="formEventBody"
            value={body}
            onChange={(e) => {
              setBody(e.target.value);
            }}
          />
        </div>
        <button className="btn btn-primary" onClick={addEvent}>
          イベントを作成する
        </button>
        <button className="btn btn-danger">全てのイベントを削除する</button>
      </form>
      <h4>イベント一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>ボディ</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {state.map((event, index) => {
            // const id = event.id;
            // const handleClickEventButton = () => {
            //   dispatch({ type: "DELETE_EVENT", id });
            // };
            return (
              <Event key={index} event={event} dispatch={dispatch}/>
              // <tr key={index}>
              //   <td>{id}</td>
              //   <td>{event.title}</td>
              //   <td>{event.body}</td>
              //   <td>
              //     <button
              //       className="btn btn-danger"
              //       onClick={handleClickEventButton}
              //     >
              //       削除
              //     </button>
              //   </td>
              // </tr>
            );
          })}
        </tbody>
      </table>
      This is a template for React App
    </div>
  );
};
