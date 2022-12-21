/* @refresh reload */
import { render } from "solid-js/web";
import { Router } from "@solidjs/router";

import App from "./App";

import "virtual:windi.css";
import "./styles.css";

render(
  () => (
    <Router>
      <App />
    </Router>
  ),
  document.getElementById("root") as HTMLElement
);
