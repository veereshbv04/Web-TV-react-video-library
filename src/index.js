import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter} from "react-router-dom"
import {VideoProvider, ThemeProvider} from "./contexts"

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>

    <BrowserRouter>
      <ThemeProvider>
          <VideoProvider>
            <App/>
          </VideoProvider>
      </ThemeProvider> 
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById("root")
);
