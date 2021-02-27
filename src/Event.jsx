import React, { useState, useEffect } from "react";
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
  const renderPeriod = () => {
    console.log("renderPeriod renders period");
    return ". ";
  };
  const reset = () => {
    setState(props);
    // setPrice(props.price);
    // setName(props.name);
  };

  useEffect(() => {
    console.log("This is like componentDidMount or componentDidUpdate. ");
    //useEffectはレンダリングの後に実行される
    //非常に有用なコンポーネント
    //componentDidMountやcomponentDidUpdateの挙動に似ている
  });
  useEffect(() => {
    console.log("This is like componentDidMount. ");
    //useEffectはレンダリングの後に実行される
    //componentDidMountやcomponentDidUpdateの
    //第二引数に空配列を格納することで、初回のみrenderされる
  }, []);
  useEffect(() => {
    console.log("This callback is for name only ");
    //useEffectはレンダリングの後に実行される
    //componentDidMountやcomponentDidUpdateの
    //第二引数に[name]を格納することで、nameが変更する度に再renderが実行される
  }, [name]);

  return (
    <>
      <p>
        現在の{name}は{price}です{renderPeriod()}
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
