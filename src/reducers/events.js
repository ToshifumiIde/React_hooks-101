import { CREATE_EVENT, DELETE_EVENT, DELETE_ALL_EVENTS } from "../actions";

// const action = {
//   type: "CREATE_EVENT",
//   title: "東京オリンピックのお知らせ",
//   body: "2020年に東京でオリンピックを開催します。つきましては…",
// };//などを作成可能

export const events = (state = [], action) => {
  switch (action.type) {
    case CREATE_EVENT:
      const event = { title: action.title, body: action.body };
      const length = state.length;
      const id = length === 0 ? 1 : state[length - 1].id + 1;
      return [...state, { id, ...event }];
    //returnでは既存のstateを展開し、展開した最後尾に生成したイベントのオブジェクトを格納している。
    case DELETE_EVENT:
      return state.filter((event) => event.id !== action.id);
    //stateの配列に対しfilterメソッドを使用。state内の各eventに対し、event.idがaction.idに合致しないものを再配列する。
    case DELETE_ALL_EVENTS:
      return [];
    default:
      return state;
  }
};
