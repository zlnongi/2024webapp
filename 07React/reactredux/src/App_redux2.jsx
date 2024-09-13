import React from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { createStore } from "redux";
import Counter from "./components/Counter";

function App() {
  return (
    <Provider store={store}>
      <div>App</div>
      <Counter />
    </Provider>
  );
}

export default App;
