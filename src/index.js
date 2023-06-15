import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { NameContextProvider } from "./Context";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <NameContextProvider>
      <App />
    </NameContextProvider>
  </StrictMode>,
  rootElement
);
