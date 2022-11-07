import { React, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  reset,
} from "../redux/counter/counterSlice";

import classes from "./Counter.module.css";

const Counter = () => {
  const [amount, setAmount] = useState(0);
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
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <button onClick={() => dispatch(incrementByAmount(amount))}>
              Increment by Amount
            </button>
          </div>
          <button
            onClick={() => {
              dispatch(reset());
              setAmount(0);
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
