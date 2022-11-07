import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/counter/counterSlice";

import classes from "./Counter.module.css";

const Counter = () => {
  const countValue = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className={classes.counter}>
      <div className={classes.counter__wrapper}>
        <h1>{countValue}</h1>
        <div className={classes.counter__operations}>
          <div className={classes.counter__buttons}>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(increment())}>Increment</button>
          </div>
          <div className={classes.counter__amount}>
            <input type="number" />
            <button>Increment by Amount</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
