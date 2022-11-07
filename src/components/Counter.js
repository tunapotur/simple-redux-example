import classes from "./Counter.module.css";

const Counter = () => {
  return (
    <div className={classes.counter}>
      <div className={classes.counter__wrapper}>
        <h1>1</h1>

        <div className={classes.counter__operations}>
          <div className={classes.counter__buttons}>
            <button>Decrement</button>
            <button>Increment</button>
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
