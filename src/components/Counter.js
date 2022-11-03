import classes from "./Counter.module.css";

const Counter = () => {
  return (
    <div className={classes.counter}>
      <h1>1</h1>

      <div>
        <button>Decrement</button>
        <button>Increment</button>
      </div>

      <div>
        <input type="number" />
        <button>Increment by Amount</button>
      </div>
    </div>
  );
};

export default Counter;
