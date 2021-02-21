import React, { useState } from "react";
import { Event } from "./Event";

export const App = () => {
  const [value, setValue] = useState("");
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const increment2 = () => {
    setCount((previousCount) => previousCount + 1);
  };
  const decrement2 = () => {
    setCount((previousCount) => previousCount - 1);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setValue("");
  };
  const setReset = () => {
    setCount(0);
  };
  const setDouble = () => {
    setCount(count * 2);
  };
  const setDivide3 = () => {
    setCount((previousCount)=>{
      if (previousCount % 3 === 0) {
        return previousCount / 3;
      } else {
        return previousCount;
      }

    })
  };

  return (
    <>
      This is item plate for React App
      <Event />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button>送信</button>
      </form>
      <ul>
        <li>todo</li>
        <li>todo</li>
        <li>todo</li>
      </ul>
      Count:{count}
      <div className="">
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
      </div>
      <div className="">
        <button onClick={increment2}>+1</button>
        <button onClick={decrement2}>-1</button>
      </div>
      <div className="">
        <button onClick={setReset}>Reset</button>
        <button onClick={setDouble}>Double</button>
        <button onClick={setDivide3}>/3</button>
      </div>
    </>
  );
};
