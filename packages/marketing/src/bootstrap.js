import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Mount fn to start up the app
const mount = (el) => {
  ReactDOM.render(<App />, el);
};

// If we're in development and in isolation, call mount immediately
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");
  if (devRoot) {
    mount(devRoot);
  }
}

// We're running through container
// and we should export the mount function
export { mount };
