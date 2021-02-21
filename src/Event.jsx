import React, { useState } from "react";
// import { App } from "./App";

export const Event = (props) => {
  // const initialState = {
  //   name: "",
  //   price: 1000,
  // };
  const [state, setState] = useState(props);
  // const [name, setName] = useState(props.name);
  // const [price, setPrice] = useState(props.price);
  const { name, price } = state;
  const reset = () => {
    setState(props);
    // setPrice(props.price);
    // setName(props.name);
  };

  return (
    <>
      <p>
        現在の{name}は{price}です。
      </p>
      <button
        onClick={() => {
          setState({ ...state, price: price + 1 });
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          setState({ ...state, price: price - 1 });
        }}
      >
        -1
      </button>
      <button onClick={reset}>Reset</button>
      {/* <button onClick={() => {
        reset();
      }}>Reset</button> */}
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setState({ ...state, name: e.target.value });
        }}
      />
    </>
  );
};

Event.defaultProps = {
  name: "",
  price: 1000,
};
