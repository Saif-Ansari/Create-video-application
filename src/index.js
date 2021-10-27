import React from "react";
import ReactDOM from "react-dom";
import "./app.scss";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, compose } from "redux";
import "antd/dist/antd.css";
import rootReducer from "./reducer/appReducer";
const enhancers = [];

const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;
if (typeof devToolsExtension === "function") {
  enhancers.push(devToolsExtension());
}

const store = createStore(rootReducer, compose(...enhancers));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
