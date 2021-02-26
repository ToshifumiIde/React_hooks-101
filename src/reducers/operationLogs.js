import { ADD_OPERATION_LOG, DELETE_ALL_OPERATION_LOGS } from "..//actions";

export const operationLogs = (state = [], action) => {
  switch (action.type) {
    case ADD_OPERATION_LOG:
      const operationLog = {
        description: action.description,
        operatedAt: action.operatedAt,
      };
      return [operationLog, ...state];
    //新たに作成されたoperationLogを配列の先頭に格納し、stateを展開して格納すれば、追加されたオブジェクトが常に先頭にくる。
    case DELETE_ALL_OPERATION_LOGS:
      return [];
    default:
      return state;
  }
};
