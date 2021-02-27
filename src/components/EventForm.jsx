import React, { useState, useContext } from "react";
import {
  CREATE_EVENT,
  DELETE_ALL_EVENTS,
  ADD_OPERATION_LOG,
  DELETE_ALL_OPERATION_LOGS,
} from "../actions";
import AppContext from "../contexts/AppContext";
import { timeCurrentIso8601 } from "../utils";

export const EventForm = () => {
  const { state, dispatch } = useContext(AppContext);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addEvent = (e) => {
    e.preventDefault();
    //CREATE_EVENTの情報をdispatchする
    dispatch({
      type: CREATE_EVENT,
      title,
      body,
    });
    //時間の情報をdispatchする
    dispatch({
      type: ADD_OPERATION_LOG,
      description: "イベントを作成しました",
      operatedAt: timeCurrentIso8601(),
    });
    setTitle("");
    setBody("");
  };

  const deleteAllEvents = (e) => {
    e.preventDefault();
    const result = window.confirm("本当に全てのイベントを削除しますか？");
    if (result) {
      dispatch({
        type: DELETE_ALL_EVENTS,
      });
      dispatch({
        type: ADD_OPERATION_LOG,
        //操作ログとしては「追加作業」となるためADD_OPERATION_LOGの方をtypeに追加
        description: "全てのログを削除しました",
        operatedAt: timeCurrentIso8601(),
      });
    }
  };

  const deleteAllOperationLogs = (e) => {
    e.preventDefault();
    const result = window.confirm(
      "全ての操作ログを本当に削除しても良いですか？"
    );
    if (result) {
      dispatch({
        type: DELETE_ALL_OPERATION_LOGS,
      });
    }
  };

  const unCreatable = title === "" || body === "";

  return (
    <>
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
        <button
          className="btn btn-primary"
          disabled={unCreatable}
          onClick={addEvent}
        >
          イベントを作成する
        </button>
        <button
          className="btn btn-danger"
          disabled={state.events.length === 0}
          onClick={deleteAllEvents}
        >
          全てのイベントを削除する
        </button>
        <button
          className="btn btn-danger"
          disabled={state.operationLogs.length === 0}
          onClick={deleteAllOperationLogs}
        >
          全ての操作ログを削除する
        </button>
      </form>
    </>
  );
};
