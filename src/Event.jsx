import React, { useState } from "react";
// import { App } from "./App";

export const Event = (props) => {
  // const initialState = {
  //   name: "",
  //   price: 1000,
  // };
  const [name, setName] = useState(props.name);
  const [price, setPrice] = useState(props.price);

  const reset = () => {
    setPrice(props.price);
    setName(props.name);
  };

  return (
    <>
      <p>
        現在の{name}は{price}です。
      </p>
      <button
        onClick={() => {
          setPrice(price + 1);
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          setPrice(price - 1);
        }}
      >
        -1
      </button>
      <button onClick={() => reset}>Reset</button>
      {/* <button onClick={() => {
        reset();
      }}>Reset</button> */}
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
    </>
  );
};

Event.defaultProps = {
  name: "",
  price: 1000,
};
