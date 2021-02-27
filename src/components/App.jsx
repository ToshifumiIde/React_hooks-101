import React, { useReducer, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { EventForm } from "./EventForm";
import { Events } from "./Events";
import { OperationLogs } from "./OperationLogs";
import AppContext from "../contexts/AppContext";
import reducer from "../reducers";

const APP_KEY = "appWithRedux";

export const App = () => {
  const appState = localStorage.getItem(APP_KEY);
  //下記のuseEffect()のタイミングでlocalStorageに格納した"appWithRedux"という名称のstringを呼び出してappStateに格納する
  const initialState = appState
    ? JSON.parse(appState) //.parse()にて文字列で格納されていたappStateを「JSON形式」に戻している。これでプロパティにアクセスできる。
    : {
        events: [],
        operationLogs: [],
      };
  const [state, dispatch] = useReducer(reducer, initialState);
  //今回の実装では第3引数は不要
  //useReducerで情報を受け取っているため、stateの更新情報はここで入手している。
  //Appコンポーネントで状態の変更を検知して、更新に応じてlocalStateに変更を格納する機能が欲しい=>useEffectを使用
  useEffect(() => {
    const string = JSON.stringify(state);
    //引数に渡されたJSオブジェクトや値をJSON「文字列」に変換する

    localStorage.setItem(APP_KEY, string);
    //JSON文字列に変換したstringを"appWithRedux"という名称でlocalStorageに格納する
    console.log({ string });
  }, [state]);

  return (
    <>
      <AppContext.Provider value={{ state, dispatch }}>
        <div className="container-fluid">
          <EventForm />
          <Events />
          <OperationLogs />
        </div>
      </AppContext.Provider>
    </>
  );
};
