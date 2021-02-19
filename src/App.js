import React, { useState } from "react";

export const App = () => {
  const [value, setValue] = useState("");
  const [count, setCount] = useState(0);
  return (
    <div className="">
      This is item plate for React App
      <form action="">
        <input
          type="text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </form>
      <div className="">
        Count:{count}
        <button
        // onClick={setCount(count + 1)}
        >
          +
        </button>
        <button
        // onClick={}
        >-</button>
      </div>
    </div>
  );
};
