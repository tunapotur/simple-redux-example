import React from "react";
import Counter from "./components/Counter";

import { store } from "./redux/store";
import { Provider } from "react-redux";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;
