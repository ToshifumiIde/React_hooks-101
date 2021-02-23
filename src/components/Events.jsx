import React from "react";
import { Event } from "./Event";

export const Events = ({ state, dispatch }) => {
  return (
    <>
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
            return <Event key={index} event={event} dispatch={dispatch} />;
          })}
        </tbody>
      </table>
    </>
  );
};
