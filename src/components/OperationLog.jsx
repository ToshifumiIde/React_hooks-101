import React from "react";

export const OperationLog = ({ operationLog }) => {
  return (
    <>
      <tr>
        <td> {operationLog.description}</td>
        <td>{operationLog.operatedAt}</td>
      </tr>
    </>
  );
};
